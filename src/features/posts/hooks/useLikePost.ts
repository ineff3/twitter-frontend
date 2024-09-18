import { InfiniteData } from '@tanstack/react-query'
import { apiRoutes } from '../../../routes'
import { IPostsResponse } from '../../../utils/api/interfaces'
import { useUpdate } from '../../../utils/api/queries'
import useQueryKeyStore from '../../../utils/api/useQueryKeyStore'

const useLikePost = (postId: string) => {
    const queryKeyStore = useQueryKeyStore()
    return useUpdate<InfiniteData<IPostsResponse>, void>({
        path: apiRoutes.likePost(postId),
        qKey: queryKeyStore.posts.all.queryKey,
        updater: (oldData) => {
            if (!oldData) return oldData

            const updatedPages = oldData.pages.map((page) => ({
                ...page,
                data: page.data.map((post) =>
                    post._id === postId
                        ? {
                              ...post,
                              likesCount: post.isLiked
                                  ? post.likesCount - 1
                                  : post.likesCount + 1,
                              isLiked: !post.isLiked,
                          }
                        : post
                ),
            }))

            return {
                ...oldData,
                pages: updatedPages,
            }
        },
    })
}

export default useLikePost
