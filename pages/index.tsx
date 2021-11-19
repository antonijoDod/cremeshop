import React from "react";
import Image from "next/image";
import { Container, Hero, Layout, ProductList } from "@components";
import commerce from "@lib/commerce";

interface HomeInterface {
    products: any;
    category: any;
}

const Home: React.FC<HomeInterface> = ({ products, category }) => {
    console.log(category);
    return (
        <Layout title="Home page" description="Home page descrition">
            <Hero />
            <div className="mb-16">
                <Container>
                    <h2 className="mt-16 text-center font-black text-2xl">
                        Super fast delivery
                    </h2>
                    <div className="grid grid-cols-12 h-96 gap-8 mt-8 justify-items-stretch">
                        <div className="bg-gray-200 col-span-5 relative grid-rows-2 flex items-center justify-center">
                            <Image
                                src={category[0].assets[0].url}
                                alt={category[0].assets[0].filename}
                                layout={"fill"}
                                objectFit="cover"
                                objectPosition="center"
                            />
                            <div className="bg-gray-800 top-0 right-0 bottom-0 left-0 absolute opacity-60"></div>
                            <div className="relative">
                                <h3 className="text-2xl tracking-wide text-white">
                                    {category[0].name}
                                </h3>
                            </div>
                        </div>
                        <div className="bg-gray-200 col-span-3 relative flex items-center justify-center">
                            <Image
                                src={category[1].assets[0].url}
                                alt={category[1].assets[0].filename}
                                layout={"fill"}
                                objectFit="cover"
                                objectPosition="center"
                            />
                            <div className="bg-gray-800 top-0 right-0 bottom-0 left-0 absolute opacity-60"></div>
                            <div className="relative">
                                <h3 className="text-2xl tracking-wide text-white">
                                    {category[1].name}
                                </h3>
                            </div>
                        </div>
                        <div className="bg-gray-200 col-span-4 relative row-span-2 flex items-center justify-center">
                            <Image
                                src={category[2].assets[0].url}
                                alt={category[2].assets[0].filename}
                                layout={"fill"}
                                objectFit="cover"
                                objectPosition="center"
                            />
                            <div className="bg-gray-800 top-0 right-0 bottom-0 left-0 absolute opacity-60"></div>
                            <div className="relative">
                                <h3 className="text-2xl tracking-wide text-white">
                                    {category[2].name}
                                </h3>
                            </div>
                        </div>
                        <div className="bg-gray-200 relative col-span-3 flex items-center justify-center">
                            <Image
                                src={category[0].assets[0].url}
                                alt={category[0].assets[0].filename}
                                layout={"fill"}
                                objectFit="cover"
                                objectPosition="center"
                            />
                            <div className="bg-gray-800 top-0 right-0 bottom-0 left-0 absolute opacity-60"></div>
                            <div className="relative">
                                <h3 className="text-2xl tracking-wide text-white">
                                    {category[0].name}
                                </h3>
                            </div>
                        </div>
                        <div className="bg-gray-200 col-span-5 relative flex items-center justify-center">
                            <Image
                                src={category[0].assets[0].url}
                                alt={category[0].assets[0].filename}
                                layout={"fill"}
                                objectFit="cover"
                                objectPosition="center"
                            />
                            <div className="bg-gray-800 top-0 right-0 bottom-0 left-0 absolute opacity-60"></div>
                            <div className="relative">
                                <h3 className="text-2xl tracking-wide text-white">
                                    {category[0].name}
                                </h3>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <section>
                <Container>
                    <div className="text-center">
                        <h2 className="text-2xl">New products</h2>
                    </div>
                    <ProductList products={products} numberOrRows={4} />
                </Container>
            </section>
        </Layout>
    );
};

export default Home;

export async function getStaticProps() {
    const { data: category } = await commerce.categories.list({
        limit: 5,
        sortBy: "created",
        sortDirection: "desc",
    });
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
