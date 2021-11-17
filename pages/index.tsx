import React from "react";

import { Container, Header, Hero } from "@components";

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Hero />
            <Container>
                <div className="grid grid-cols-12 gap-8 mt-8">
                    <div className="bg-red-500 col-span-5 h-64">1</div>
                    <div className="bg-blue-500 col-span-3">2</div>
                    <div className="bg-green-400 col-span-4 row-span-2">3</div>
                    <div className="bg-yellow-600 col-span-3 h-64">4</div>
                    <div className="bg-indigo-700 col-span-5">5</div>
                </div>
            </Container>
        </>
    );
};

export default Home;
