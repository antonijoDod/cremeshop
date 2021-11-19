import React from "react";
import Head from "next/head";
import { Header } from "@components/header";

interface LayoutInterface {
    title: string;
    description: string;
    children: any;
}

export const Layout: React.FC<LayoutInterface> = ({
    title,
    description,
    children,
}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta
                    name="description"
                    property="description"
                    content={description}
                />
            </Head>
            <Header />
            {children}
        </div>
    );
};
