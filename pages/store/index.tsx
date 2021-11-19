import React from "react";
import { Container, Layout, ProductList } from "@components";
import Image from "next/image";
import commerce from "@lib/commerce";

const StorePage = ({products}) => {
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
                <hr/>
                <div className="flex mt-4">
                    <div className="w-1/4">Forrth</div>
                    <div className="w-3/4 pl-4">
                        <ProductList products={products} numberOrRows={3}/>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default StorePage;

export async function getStaticProps () {

    const {data: products} = await commerce.products.list()

    return {
        props: { products }
    }
}