import React from "react";
import Link from "next/link";

export const Menu = () => {
    return (
        <div>
            <ul className="flex">
                <li>
                    <Link href="/store">
                        <a
                            href="#"
                            className="p-4 uppercase font-semibold text-black"
                        >
                            SHOP
                        </a>
                    </Link>
                </li>
                <li>
                    <a
                        href="#"
                        className="p-4 uppercase font-semibold text-gray-primary"
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="p-4 uppercase font-semibold text-gray-primary"
                    >
                        Faq
                    </a>
                </li>
            </ul>
        </div>
    );
};
