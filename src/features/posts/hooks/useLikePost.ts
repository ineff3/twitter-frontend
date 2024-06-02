import { InfiniteData } from '@tanstack/react-query'
import { apiRoutes } from '../../../routes'
import { IPostsResponse } from '../../../utils/api/interfaces'
import { usePost } from '../../../utils/api/queries'
import useQueryKeyStore from '../../../utils/api/useQueryKeyStore'

interface ILikePostData {
    postId: string
}

const useLikePost = () => {
    const queryKeyStore = useQueryKeyStore()
    return usePost<InfiniteData<IPostsResponse>, ILikePostData, null>(
        apiRoutes.likePost,
        queryKeyStore.posts.all.queryKey,
        (oldData, newData) => {
            if (!oldData) return oldData

            const updatedPages = oldData.pages.map((page) => ({
                ...page,
                data: page.data.map((post) =>
                    post._id === newData.postId
                        ? {
                              ...post,
                              likedBy: post.isLiked
                                  ? post.likedBy - 1
                                  : post.likedBy + 1,
                              isLiked: !post.isLiked,
                          }
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

export default useLikePost
