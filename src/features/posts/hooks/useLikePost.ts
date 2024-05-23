import { apiRoutes } from '../../../routes'
import { usePost } from '../../../utils/api/queries'
import useQueryKeyStore from '../../../utils/api/useQueryKeyStore'
import { IPost } from '../interfaces'

interface ILikePostData {
    postId: string
}

const useLikePost = () => {
    const queryKeyStore = useQueryKeyStore()
    return usePost<IPost[], ILikePostData, null>(
        apiRoutes.likePost,
        queryKeyStore.posts.all.queryKey,
        (oldData, newData) => [
            ...oldData.map((post) =>
                post._id == newData.postId
                    ? {
                          ...post,
                          likedBy: post.isLiked
                              ? post.likedBy - 1
                              : post.likedBy + 1,
                          isLiked: !post.isLiked,
                      }
                    : post
            ),
        ]
    )
}

export default useLikePost
