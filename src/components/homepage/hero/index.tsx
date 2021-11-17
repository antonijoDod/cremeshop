import React from "react";
import Link from "next/link";
import { Container } from "@components";

export const Hero = () => {
    return (
        <div className="relative">
            <Container>
                <div className="lg:max-w-lg my-28">
                    <h1 className="text-6xl leading-snug mb-4">
                        A Header for your Landing Page
                    </h1>
                    <p className="mb-4">
                        A subititle for your landing page describing your
                        product or service that you provide.
                    </p>
                    <div>
                        <span className="mr-4">$249.99</span>
                        <Link href="#">
                            <a className="btn btn-primary">Buy now</a>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};
