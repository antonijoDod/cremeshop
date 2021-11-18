import * as React from "react";

export const Trolly = (props) => {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M1 2h2.396a2 2 0 011.952 1.566L6 6.5m0 0l1.104 6.073a6 6 0 005.904 4.927h2.703a6 6 0 005.85-4.67l1.023-4.498A1.5 1.5 0 0021.12 6.5H6z"
                stroke="#FCFCFC"
                strokeWidth={2}
                strokeLinecap="round"
            />
            <circle cx={8.5} cy={21} r={1} stroke="#FCFCFC" strokeWidth={2} />
            <circle cx={20.5} cy={21} r={1} stroke="#FCFCFC" strokeWidth={2} />
        </svg>
    );
};
