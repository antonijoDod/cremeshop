import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    className?: string | undefined;
}

export const ChevronRightIcon: React.FC<Props> = ({
    className = "",
    ...rest
}) => {
    return (
        <div className={className}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                />
            </svg>
        </div>
    );
};
