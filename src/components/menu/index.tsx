import React from "react";

export const Menu = () => {
    return (
        <div>
            <ul className="flex">
                <li>
                    <a
                        href="#"
                        className="p-4 uppercase font-semibold text-black"
                    >
                        SHOP
                    </a>
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
