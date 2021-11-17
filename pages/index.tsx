import React from "react";

import { Container, Header, Main, Footer, Cards, Hero } from "@components";

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Hero />
            <div>
                <a href="#" className="btn">
                    This is button
                </a>
                <a href="#" className="btn btn-primary">
                    This is primaty button
                </a>
                <a href="#" className="btn btn-secondary">
                    THis is secondary button
                </a>
                <a href="#" className="btn btn-link">
                    This is link
                </a>
            </div>
        </>
    );
};

export default Home;
