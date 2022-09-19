import React from "react";

interface PaginatorProps {
    page: number
    changePage: React.Dispatch<React.SetStateAction<number>>
    totalPages: number
}

const Paginator = ({page, changePage, totalPages}: PaginatorProps) => {

    const itFirstPage = page === 1
    const itLastPage = page < totalPages

    const decrease = () => !itFirstPage && changePage(page - 1)
    const increase = () => itLastPage && changePage(page + 1)


    return (
        <div className='text-white flex gap-5 font-[700] text-[22px] justify-center'>
            <button disabled={itFirstPage}
                    className='border-[2px] border-white w-[35px] h-[35px] rounded-full '
                    onClick={decrease}>-
            </button>
            <p>{page}</p>
            <button disabled={!itLastPage}
                    className='border-[2px] border-white w-[35px] h-[35px] rounded-full '
                    onClick={increase}>+
            </button>
        </div>
    )

}
export default Paginator