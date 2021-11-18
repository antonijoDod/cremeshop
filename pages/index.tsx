import React from "react";
import Image from "next/image";
import { Container, Header, Hero } from "@components";
import commerce from "@lib/commerce";

interface HomeInterface {
    products: any;
    category: any;
}

const Home: React.FC<HomeInterface> = ({ products, category }) => {
    console.log(products);
    return (
        <>
            <Header />
            <Hero />
            <Container>
                <h2 className="mt-16 text-center font-black text-2xl">
                    Super fast delivery
                </h2>
                <div className="grid grid-cols-12 h-96 gap-8 mt-8 justify-items-stretch">
                    <div className="bg-gray-200 col-span-5 grid-rows-2 flex items-center justify-center">
                        1
                    </div>
                    <div className="bg-gray-200 col-span-3 flex items-center justify-center">
                        2
                    </div>
                    <div className="bg-gray-200 col-span-4 row-span-2 flex items-center justify-center">
                        3
                    </div>
                    <div className="bg-gray-200 col-span-3 flex items-center justify-center">
                        4
                    </div>
                    <div className="bg-gray-200 col-span-5 flex items-center justify-center">
                        5
                    </div>
                </div>
            </Container>
            <section>
                <Container>
                    <ul className="grid gap-8 grid-cols-4">
                        {products.length > 0
                            ? products.map((product) => (
                                  <li key={product.id} className="mt-8">
                                      <div className="flex justify-end w-full mb-8">
                                          <span className="py-1 inline-block px-2 border">
                                              New
                                          </span>
                                      </div>
                                      <Image
                                          height={280}
                                          width={280}
                                          src={product.image.url}
                                          alt={product.image.filename}
                                      />
                                      <div className="text-center">
                                          <h3 className="font-black text-xl mb-4">
                                              {product.name}
                                          </h3>
                                          <div className="font-bold text-gray-primary mb-8">
                                              {
                                                  product.price
                                                      .formatted_with_code
                                              }
                                          </div>
                                          <a className="btn btn-secondary w-full">
                                              Add to cart
                                          </a>
                                      </div>
                                  </li>
                              ))
                            : "No products"}
                    </ul>
                </Container>
            </section>
        </>
    );
};

export default Home;

export async function getStaticProps() {
    const { data: category } = await commerce.categories.list();
    const { data: products } = await commerce.products.list({
        limit: 4,
        sortBy: "created",
        sortDirection: "desc",
    });
    return {
        props: {
            category,
            products,
        },
    };
}
