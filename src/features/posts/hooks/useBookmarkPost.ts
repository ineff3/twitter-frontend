import { apiRoutes } from '../../../routes'
import { usePost } from '../../../utils/api/queries'
import useQueryKeyStore from '../../../utils/api/useQueryKeyStore'
import { IPost } from '../interfaces'

interface IBookmarkPostData {
    postId: string
}

const useBookmarkPost = () => {
    const queryKeyStore = useQueryKeyStore()
    return usePost<IPost[], IBookmarkPostData, null>(
        apiRoutes.bookmarkPost,
        queryKeyStore.posts.all.queryKey,
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
