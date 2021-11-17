import React from "react";

interface ContainerInterface {
    children: any;
}

export const Container: React.FC<ContainerInterface> = ({ children }) => {
    return (
        <main className="container mx-auto px-4 max-w-screen-xl">
            {children}
        </main>
    );
};
