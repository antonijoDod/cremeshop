import React from "react";

import { Container, Logo, Menu } from "@components";

export const Header: React.FC = () => {
    return (
        <Container>
            <div className="flex justify-between">
                <div>Logo</div>
                <Menu />
                <div>Action</div>
            </div>
        </Container>
    );
};
