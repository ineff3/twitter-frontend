import { apiRoutes } from '../../../routes'
import { usePost } from '../../../utils/api/queries'
import { IPost } from '../interfaces'

interface ILikePostData {
    postId: string
}

const useLikePost = () => {
    return usePost<IPost[], ILikePostData, null>(
        apiRoutes.likePost,
        apiRoutes.getAllPosts,
        null,
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
