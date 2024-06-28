import { InfiniteData } from '@tanstack/react-query'
import { apiRoutes } from '../../../routes'
import { useDelete } from '../../../utils/api/queries'
import useQueryKeyStore from '../../../utils/api/useQueryKeyStore'
import { IPostsResponse } from '../../../utils/api/interfaces'

const useDeletePost = () => {
    const queryKeyStore = useQueryKeyStore()
    return useDelete<InfiniteData<IPostsResponse>, string>({
        path: apiRoutes.posts,
        qKey: queryKeyStore.posts.all.queryKey,
        updater: (oldData, deletedPostId) => {
            if (!oldData) return oldData

            const updatedPages = oldData.pages.map((page) => ({
                ...page,
                data: page.data.filter((post) => post._id !== deletedPostId),
            }))

            return {
                ...oldData,
                pages: updatedPages,
            }
        },
    })
}

export default useDeletePost
