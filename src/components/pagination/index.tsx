import React from "react";
import ReactPaginate from "react-paginate";
import { ChevronLeftIcon, ChevronRightIcon } from "@components/icons";

export const Pagination = ({ pagination, onPaginationClick }) => {
    const handlePageClick = (event) => {
        onPaginationClick(event.selected + 1);
    };

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel={<ChevronRightIcon />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pagination.total_pages}
            previousLabel={<ChevronLeftIcon />}
            renderOnZeroPageCount={null}
            pageLinkClassName="rounded px-4 border inline-block"
            previousClassName="p-2"
            previousLinkClassName="bg-indigo-500"
            nextClassName="p-2"
            nextLinkClassName="bg-green-500"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="inline-flex text-gray-primary border items-center my-8"
            activeClassName="active"
        />
    );
};
