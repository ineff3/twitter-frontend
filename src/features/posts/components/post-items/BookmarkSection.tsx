import { useEffect, useState } from 'react'
import BookmarkIconSvg from '../../../../components/ui/icons/BookmarkIconSvg'
import useBookmarkPost from '../../hooks/useBookmarkPost.ts'

interface Props {
    postId: string
    isBookmarked: boolean
}

const BookmarkSection = ({ postId, isBookmarked }: Props) => {
    const useBookmarkPostMutatiton = useBookmarkPost()

    const onClick = () => {
        useBookmarkPostMutatiton.mutate({ postId: postId })
    }
    return (
        <button className=" btn btn-circle btn-ghost btn-sm" onClick={onClick}>
            <div className={` ${isBookmarked && 'text-primary'}`}>
                <BookmarkIconSvg
                    width={19}
                    height={19}
                    stroke={isBookmarked ? 'none' : 'currentColor'}
                    fill={isBookmarked ? 'currentColor' : 'none'}
                />
            </div>
        </button>
    )
}

export default BookmarkSection
