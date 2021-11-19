import React from "react";
import Link from "next/link";
import { Container, Menu } from "@components";

export const Header: React.FC = () => {
    return (
        <Container>
            <div className="flex justify-between h-16 items-center">
                <div>
                    <Link href="/">
                        <a>Logo</a>
                    </Link>
                </div>
                <Menu />
                <div>Action</div>
            </div>
        </Container>
    );
};
