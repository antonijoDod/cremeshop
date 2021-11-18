import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductInterface {
    product: {
        name: string;
        price: {
            formatted_with_code: string;
        };
        image: {
            url: string;
            filename: string;
        };
    };
}

export const Product: React.FC<ProductInterface> = ({ product }) => {
    const { name, price, image } = product;
    return (
        <li className="mt-8 w-full">
            <div className="flex justify-end w-full mb-8">
                <span className="py-1 inline-block px-2 border">New</span>
            </div>
            <Link href={`/store/product/${product.permalink}`}>
                <div className="relative text-center cursor-pointer">
                    <Image
                        height={280}
                        width={280}
                        src={image.url}
                        alt={image.filename}
                        className="transition transform hover:scale-105"
                    />
                </div>
            </Link>
            <div className="text-center">
                <h3 className="font-black text-xl mb-4">{name}</h3>
                <div className="font-bold text-gray-primary mb-8">
                    {price.formatted_with_code}
                </div>
                <a className="btn btn-secondary w-full">Add to cart</a>
            </div>
        </li>
    );
};
