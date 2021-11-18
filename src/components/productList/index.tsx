import React from "react";
import { Product } from "@components/product";

interface ProductListInterface {
    products: {
        length: boolean;
        id: string;
        map(element: (product: any) => JSX.Element): string;
    };
}

export const ProductList: React.FC<ProductListInterface> = ({ products }) => {
    return (
        <ul className="grid gap-8 md:grid-cols-4 sm:grid-cols-2 justify-items-center">
            {products.length
                ? products.map((product) => (
                      <Product key={product.id} product={product} />
                  ))
                : "No products"}
        </ul>
    );
};
