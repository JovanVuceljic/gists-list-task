const Pagination = ({ setPage, currentPage = 1, totalPages }) => {

    const handlePageChange = (e) => {
        const page = parseInt(e.currentTarget.value);
        if (page > 0 && page <= totalPages)
            setPage(page)
    }

    return (
        <div className="pagination-wrap">
            <div className="pagination">
                <button
                    value={1}
                    onClick={handlePageChange}
                    className={currentPage === 1 ? `active` : ""}
                >
                    {1}
                </button>
                <button
                    value={2}
                    className={currentPage === 2 ? `active` : ""}
                    onClick={handlePageChange}
                >
                    {2}
                </button>
                <span>
                    ...
                </span>
                {
                    ![1, 2, totalPages - 1, totalPages].includes(currentPage) &&
                    (
                        <>
                            <button
                                value={currentPage}
                                className="active"
                                onClick={handlePageChange}
                            >
                                {currentPage}
                            </button>
                            <span>
                                ...
                            </span>
                        </>
                    )
                }
                <button
                    className={currentPage === totalPages - 1 ? `active` : ""}
                    value={parseInt(totalPages) - 1}
                    onClick={handlePageChange}
                >
                    {parseInt(totalPages) - 1}
                </button>
                <button
                    className={currentPage === totalPages ? `active` : ""}
                    value={parseInt(totalPages)}
                    onClick={handlePageChange}
                >
                    {parseInt(totalPages)}
                </button>
                <button
                    className="btn"
                    value={parseInt(currentPage) - 1}
                    onClick={handlePageChange}
                >
                    {'<'}
                </button>
                <button
                    className="btn"
                    value={parseInt(currentPage) + 1}
                    onClick={handlePageChange}
                >
                    {'>'}
                </button>
            </div>
        </div>
    )
}

export default Pagination;