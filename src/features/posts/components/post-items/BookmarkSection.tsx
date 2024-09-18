import { useEffect, useState } from 'react'
import BookmarkIconSvg from '../../../../components/ui/icons/BookmarkIconSvg'
import useBookmarkPost from '../../hooks/useBookmarkPost.ts'

interface Props {
    postId: string
    isBookmarked: boolean
}

const BookmarkSection = ({ postId, isBookmarked }: Props) => {
    const useBookmarkPostMutatiton = useBookmarkPost(postId)

    const onClick = () => {
        useBookmarkPostMutatiton.mutate()
    }
    return (
        <button className=" btn btn-circle btn-ghost btn-sm" onClick={onClick}>
            <div className={` ${isBookmarked && 'text-primary'}`}>
                <BookmarkIconSvg
                    width={22}
                    height={22}
                    stroke={isBookmarked ? 'none' : 'currentColor'}
                    fill={isBookmarked ? 'currentColor' : 'none'}
                />
            </div>
        </button>
    )
}

export default BookmarkSection
