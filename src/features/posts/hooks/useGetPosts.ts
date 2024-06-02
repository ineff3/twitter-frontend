import { useInfiniteQuery } from '@tanstack/react-query'
import useQueryKeyStore from '../../../utils/api/useQueryKeyStore'
import { useApi } from '../../../utils/api/actions'
import { apiRoutes } from '../../../routes'
import { IPostsResponse } from '../../../utils/api/interfaces'

const useGetPosts = ({ limit }: { limit: number }) => {
    const { get } = useApi()
    const queryKeyStore = useQueryKeyStore()
    return useInfiniteQuery({
        queryKey: queryKeyStore.posts.all.queryKey,
        queryFn: ({ pageParam }) =>
            get<IPostsResponse>(apiRoutes.posts, { page: pageParam, limit }),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            return lastPage.nextPage
        },
    })
}

export default useGetPosts
