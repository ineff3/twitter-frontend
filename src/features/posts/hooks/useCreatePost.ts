import { InfiniteData } from '@tanstack/react-query'
import { apiRoutes } from '../../../routes'
import { usePost } from '../../../utils/api/queries'
import useQueryKeyStore from '../../../utils/api/useQueryKeyStore'
import { IPost } from '../interfaces'
import { IPostsResponse } from '../../../utils/api/interfaces'

interface IPostCreateData {
    text?: string
    postImage?: string
}

const useCreatePost = () => {
    const queryKeyStore = useQueryKeyStore()
    return usePost<InfiniteData<IPostsResponse>, FormData, IPost>({
        path: apiRoutes.posts,
        qKey: queryKeyStore.posts.all.queryKey,
        axiosOptions: {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        },
    })
}

export default useCreatePost
