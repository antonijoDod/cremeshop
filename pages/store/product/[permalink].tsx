import React from "react";
import commerce from "@lib/commerce";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "@components";

interface ProductPageInterface {
    product: any;
}

const ProductPage: React.FC<ProductPageInterface> = ({ product }) => {
    console.log(product);
    const { name, image, description, price, seo } = product;
    return (
        <Layout title={seo.title} description={seo.description}>
            <div>
                <Image
                    src={image.url}
                    alt={image.filename}
                    height={280}
                    width={280}
                />
            </div>
            <h1>{name}</h1>
            <div dangerouslySetInnerHTML={{ __html: description }} />
            <span className="text-3xl font-bold">
                {price.formatted_with_code}
            </span>
            <div>
                <Link href="/">
                    <a className="mt-8 btn btn-primary">BACK</a>
                </Link>
            </div>
        </Layout>
    );
};

export default ProductPage;

export async function getStaticPaths() {
    const { data: products } = await commerce.products.list();

    return {
        paths: products.map((product: any) => ({
            params: {
                permalink: product.permalink,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params: { permalink } }: any) {
    const product = await commerce.products.retrieve(permalink, {
        type: "permalink",
    });
    return {
        props: { product },
    };
}
