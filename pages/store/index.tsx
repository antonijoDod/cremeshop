import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Container, Layout, ProductList } from "@components";
import Image from "next/image";
import { useRouter } from "next/router";
import commerce from "@lib/commerce";
import { ChevronLeftIcon, ChevronRightIcon } from "@components/icons";


const StorePage = ({ products, categories }) => {
  const { data, meta: { pagination } } = products;
  // const [page, setPage] = useState(1);
  // const [sort, setSort] = useState("");
  // const [categoryId, setCategoryId] = useState('');

  const [query, setQuery] = useState({
    page: 1,
  });

  const router = useRouter();

  // useEffect(() => {
  //   router.push(`/store?page=${page}&sortBy=${sort}&category_id=${categoryId}`);
  // }, [page, sort,categoryId]);

  useEffect(() => {
    // router.push(`/store?page=${page}&${query}`);
    router.push({
      pathname: router.pathname,
      query: query
    })
  }, [query]);

  const handlePageClick = (event) => {
    setQuery({...query, page: event.selected + 1});
  };

  const handleSort = (e) => {
    setQuery( {...query, sortBy: e.target.value})
  };

  const handleCategorySelect = (id) => {
    setQuery({...query, page: 1, category_id: id })
  }

  return (
    <Layout title="Store" description="This is description for shop">
      <Container>
        <div className="relative mb-16">
          <Image
            src="/assets/images/heroImg.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div className="lg:max-w-lg py-28 relative z-20 p-4">
            <h1 className="text-3xl leading-snug mb-4">
              A Header for your Landing Page
            </h1>
            <p className="mb-4">
              A subtitle for your landing page describing your
              product or service that you provide.
            </p>
          </div>
        </div>
      </Container>
      <Container>
        <div className="mb-4">Home > All</div>
        <hr />
        <div className="flex mt-4">
          <div className="w-1/4">
            <div>
              <h3 className="mb-4">Sort by:</h3>
              <select name="sortElement" onChange={(e) => handleSort(e)}>
                <option value="price">Price</option>
                <option value="created">Created</option>
                <option value="name">Name</option>
              </select>
            </div>
            <div>
              <h3 className="mt-8 mb-4">Choose category</h3>
              <ul>
                {categories.map(category => (
                  <li key={category.id} onClick={() => handleCategorySelect(category.id)}>
                    <label className="items-center flex cursor-pointer mb-2">
                      <input type="radio" className="hidden" />
                      <div className="border border-solid border-black border-opacity-30 rounded-full mr-2 p-1">
                        <div className="rounded-full h-2 w-2 bg-transparent"></div>
                      </div>
                      {category.name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-3/4 pl-4">
            <ProductList products={products.data} numberOrRows={3} />
            <ReactPaginate
              breakLabel="..."
              nextLabel={<ChevronRightIcon />}
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pagination.total_pages}
              previousLabel={<ChevronLeftIcon />}
              renderOnZeroPageCount={null}
              pageLinkClassName="rounded px-4 border inline-block"
              previousClassName="p-2"
              previousLinkClassName="bg-indigo-500"
              nextClassName="p-2"
              nextLinkClassName="bg-green-500"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="inline-flex text-gray-primary border items-center my-8"
              activeClassName="active"
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default StorePage;

export async function getServerSideProps({ query }) {
  const queryProp = { limit: 9, ...query };
  const products = await commerce.products.list(queryProp);
  const { data: categories } = await commerce.categories.list();

  return {
    props: { products, categories }
  };
}