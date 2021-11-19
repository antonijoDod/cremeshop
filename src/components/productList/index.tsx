import React from "react";
import classNames from "classnames";
import { Product } from "@components/product";

interface ProductListInterface {
    numberOrRows: number;
    products: {
        length: boolean;
        id: string;
        map(element: (product: any) => JSX.Element): string;
    };
}

export const ProductList: React.FC<ProductListInterface> = ({
    products,
    numberOrRows,
}) => {
    const gridClass = classNames({
        "md:grid-cols-4 sm:grid-cols-2": numberOrRows === 4,
        "md:grid-cols-3 sm:grid-cols-2": numberOrRows === 3,
    });
    return (
        <ul className={`grid gap-8  justify-items-center ${gridClass}`}>
            {products.length
                ? products.map((product) => (
                      <Product key={product.id} product={product} />
                  ))
                : "No products"}
        </ul>
    );
};
