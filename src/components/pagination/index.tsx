import React from "react";
import ReactPaginate from "react-paginate";
import { ChevronLeftIcon, ChevronRightIcon } from "@components/icons";

interface Props {
    pagination: any;
    onPaginationClick: (x: number) => number;
}

export const Pagination: React.FC<Props> = ({
    pagination,
    onPaginationClick,
}) => {
    /* TODO Remove in future any! */
    const handlePageClick = (event: any) => {
        onPaginationClick(event.selected + 1);
    };

    return (
        <ReactPaginate
            marginPagesDisplayed={1}
            breakLabel="..."
            nextLabel={<ChevronRightIcon />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pagination.total_pages}
            previousLabel={<ChevronLeftIcon />}
            pageLinkClassName="rounded px-4 border inline-block"
            previousClassName="p-2"
            previousLinkClassName="bg-indigo-500"
            nextClassName="p-2"
            nextLinkClassName="bg-green-500"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="inline-flex text-gray-primary border items-center my-8"
            activeClassName="active"
        />
    );
};
