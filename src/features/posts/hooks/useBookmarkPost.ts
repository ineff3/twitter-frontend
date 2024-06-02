import { InfiniteData } from '@tanstack/react-query'
import { apiRoutes } from '../../../routes'
import { usePost } from '../../../utils/api/queries'
import useQueryKeyStore from '../../../utils/api/useQueryKeyStore'
import { IPost } from '../interfaces'
import { IPostsResponse } from '../../../utils/api/interfaces'

interface IBookmarkPostData {
    postId: string
}

const useBookmarkPost = () => {
    const queryKeyStore = useQueryKeyStore()
    return usePost<InfiniteData<IPostsResponse>, IBookmarkPostData, null>(
        apiRoutes.bookmarkPost,
        queryKeyStore.posts.all.queryKey,
        (oldData, newData) => {
            if (!oldData) return oldData

            const updatedPages = oldData.pages.map((page) => ({
                ...page,
                data: page.data.map((post) =>
                    post._id == newData.postId
                        ? { ...post, isBookmarked: !post.isBookmarked }
                        : post
                ),
            }))

            return {
                ...oldData,
                pages: updatedPages,
            }
        }
    )
}

export default useBookmarkPost
