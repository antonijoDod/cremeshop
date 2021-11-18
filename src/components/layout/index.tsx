import React from "react";

interface LayoutInterface {
    children: never;
}

const Layout: React.FC<LayoutInterface> = ({ children }) => {
    return <div>{children}</div>;
};

export default Layout;
