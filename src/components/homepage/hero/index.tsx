import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@components";
import { Trolly } from "@components/icons";

export const Hero = () => {
    return (
        <div className="relative">
            <Image
                src="/assets/images/heroImg.png"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
            />
            <Container>
                <div className="lg:max-w-lg py-28 relative z-20">
                    <h1 className="text-6xl leading-snug mb-4">
                        A Header for your Landing Page
                    </h1>
                    <p className="mb-4">
                        A subtitle for your landing page describing your product
                        or service that you provide.
                    </p>
                    <div>
                        <span className="mr-4 font-bold">249.99 EUR</span>
                        <Link href="#">
                            <a className="btn btn-primary flex items-center fill-current bg-gray-primary">
                                <Trolly className="inline-block h-8 w-8" />
                                <div className="inline-block">Buy now</div>
                            </a>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};
