import React from "react";
import {
    ButtonBack,
    ButtonNext,
    CarouselProvider,
    Slide,
    Slider,
} from "pure-react-carousel";
import { useMutation } from "react-query";
import commerce from "@lib/commerce";
import Image from "next/image";
import { Container, Layout } from "@components";
import { ChevronLeftIcon, ChevronRightIcon } from "@components/icons";
import "pure-react-carousel/dist/react-carousel.es.css";

interface Assets {
    id: string;
    filename: string;
    url: string;
}

interface Props {
    product: {
        id: string;
        name: string;
        permalink: string;
        description: string;
        image: {
            url: string;
            filename: string;
        };
        price: {
            formatted_with_code: string;
        };
        seo: {
            title: string;
            description: string;
        };
        assets: Assets[];
    };
}

const ProductPage: React.FC<Props> = ({ product }) => {
    const { id, name, image, description, price, seo, assets } = product;

    const mutation = useMutation(() => commerce.cart.add(id, 1));

    const handleAddToCart = async () => {
        await mutation.mutateAsync();
    };

    return (
        <Layout title={seo.title} description={seo.description}>
            <div className="mt-16">
                <Container>
                    <div className="flex">
                        <div className="w-1/2">
                            <CarouselProvider
                                naturalSlideWidth={100}
                                naturalSlideHeight={125}
                                totalSlides={assets.length}
                                className="relative"
                            >
                                <Slider>
                                    {assets.length > 0
                                        ? assets.map((asset, index) => (
                                              <Slide
                                                  key={asset.id}
                                                  index={index}
                                              >
                                                  <Image
                                                      src={asset.url}
                                                      alt={asset.filename}
                                                      layout={"fill"}
                                                      objectFit="fill"
                                                      objectPosition="center"
                                                  />
                                              </Slide>
                                          ))
                                        : "NO images"}
                                </Slider>
                                <ButtonBack className="absolute top-1/2 transform -translate-y-1/2">
                                    <ChevronLeftIcon className="p-2 bg-gray-500 bg-opacity-50 text-white rounded-full hover:bg-opacity-100 transition" />
                                </ButtonBack>
                                <ButtonNext className="absolute top-1/2 right-0 transform -translate-y-1/2">
                                    <ChevronRightIcon className="p-2 bg-gray-500 bg-opacity-50 text-white rounded-full hover:bg-opacity-100 transition" />
                                </ButtonNext>
                            </CarouselProvider>
                        </div>
                        <div className="w-1/2 p-4">
                            <h1 className="text-2xl mb-4">{name}</h1>
                            <div
                                className="mb-4"
                                dangerouslySetInnerHTML={{
                                    __html: description,
                                }}
                            />
                            <span className="text-3xl font-bold">
                                {price.formatted_with_code}
                            </span>
                            <div>
                                <button
                                    className={`mt-8 btn btn-primary ${
                                        mutation.isLoading && "btn-disable"
                                    }`}
                                    onClick={() => handleAddToCart()}
                                >
                                    {mutation.isLoading
                                        ? "Loading"
                                        : "Add to cart"}
                                </button>
                            </div>
                        </div>
                    </div>
                </Container>
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
