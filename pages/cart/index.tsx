import React from "react";
import { useMutation, useQuery } from "react-query";
import commerce from "@lib/commerce";
import { Container, Layout } from "@components";
import Image from "next/image";

const CartPage = () => {
    const { isLoading, error, data, refetch, isRefetching } = useQuery(
        "cart",
        async () => await commerce.cart.retrieve(),
    );

    const mutation = useMutation(
        ({ id, quantity }: { id: string; quantity: number }) =>
            commerce.cart.update(id, { quantity: quantity }),
    );

    const handleAddProductQuantity = async ({
        id,
        quantity,
    }: {
        id: string;
        quantity: number;
    }) => {
        await mutation.mutateAsync({ id, quantity });
        refetch();
    };

    const handleDecreaseProductQuantity = async ({
        id,
        quantity,
    }: {
        id: string;
        quantity: number;
    }) => {
        await mutation.mutateAsync({ id, quantity });
        refetch();
    };

    if (isLoading) {
        return <div>Loading</div>;
    }

    return (
        <Layout title="Cart" description="Cart page">
            <Container>
                <div className="mt-16 flex gap-4">
                    <div className="w-2/3">
                        <ul>
                            {data?.line_items.length
                                ? data.line_items.map(
                                      ({
                                          id,
                                          name,
                                          image,
                                          quantity,
                                          price,
                                          line_total,
                                      }) => (
                                          <li
                                              key={id}
                                              className="flex justify-between p-4  border-b"
                                          >
                                              <div className="flex">
                                                  {/*TODO Set backup image when you image is not set in product, fallback image*/}
                                                  <Image
                                                      src={
                                                          image
                                                              ? image?.url
                                                              : ""
                                                      }
                                                      alt={image?.filename}
                                                      height={100}
                                                      width={100}
                                                  />
                                                  <div className="ml-4 flex flex-col justify-between">
                                                      <h3>{name}</h3>
                                                      <span>Size: </span>
                                                      <div className="flex items-center">
                                                          <button
                                                              className="p-2 bg-gray-200 mr-2"
                                                              onClick={() =>
                                                                  handleDecreaseProductQuantity(
                                                                      {
                                                                          id: id,
                                                                          quantity:
                                                                              quantity -
                                                                              1,
                                                                      },
                                                                  )
                                                              }
                                                          >
                                                              -
                                                          </button>
                                                          <span className="mr-2">
                                                              {isRefetching ? (
                                                                  <div className="h-4 w-4 p-2 rounded-full border-8"></div>
                                                              ) : (
                                                                  quantity
                                                              )}
                                                          </span>
                                                          <button
                                                              className="p-2 bg-gray-200"
                                                              onClick={() =>
                                                                  handleAddProductQuantity(
                                                                      {
                                                                          id: id,
                                                                          quantity:
                                                                              quantity +
                                                                              1,
                                                                      },
                                                                  )
                                                              }
                                                          >
                                                              +
                                                          </button>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="flex flex-col text-right justify-between">
                                                  <span>
                                                      {
                                                          price.formatted_with_code
                                                      }
                                                  </span>
                                                  <span>
                                                      Total:{" "}
                                                      {
                                                          line_total.formatted_with_symbol
                                                      }
                                                  </span>
                                                  <a className="btn btn-link">
                                                      Remove
                                                  </a>
                                              </div>
                                          </li>
                                      ),
                                  )
                                : "Cart is empty"}
                        </ul>
                    </div>
                    <div className="w-1/3">
                        <div className="p-4">asd</div>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default CartPage;
