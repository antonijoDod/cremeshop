import React from "react";
import { Container, Header, Hero, ProductList } from "@components";
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
                    <ProductList products={products} />
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
