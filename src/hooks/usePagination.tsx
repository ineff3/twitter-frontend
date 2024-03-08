import { useState } from 'react'

interface Props {}

const usePagination = () => {
    const [page, setPage] = useState(1)

    const nextPage = () => {
        setPage((prev) => prev + 1)
    }

    const prevPage = () => {
        setPage((prev) => prev - 1)
    }

    return { page, nextPage, prevPage }
}

export default usePagination
