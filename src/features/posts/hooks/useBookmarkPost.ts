import { apiRoutes } from '../../../routes'
import { usePost } from '../../../utils/api/queries'
import { IPost } from '../interfaces'

interface IBookmarkPostData {
    postId: string
}

const useBookmarkPost = () => {
    return usePost<IPost[], IBookmarkPostData, null>(
        apiRoutes.bookmarkPost,
        apiRoutes.getAllPosts,
        null,
        (oldData, newData) => [
            ...oldData.map((post) =>
                post._id == newData.postId
                    ? { ...post, isBookmarked: !post.isBookmarked }
                    : post
            ),
        ]
    )
}

export default useBookmarkPost
