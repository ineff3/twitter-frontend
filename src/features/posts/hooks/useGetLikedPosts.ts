import { useInfiniteQuery } from '@tanstack/react-query'
import useQueryKeyStore from '../../../utils/api/useQueryKeyStore'
import { useApi } from '../../../utils/api/actions'
import { IPostsResponse } from '../../../utils/api/interfaces'
import { apiRoutes } from '../../../routes'

const useGetLikedPosts = ({ limit }: { limit: number }) => {
    const { get } = useApi()
    const queryKeyStore = useQueryKeyStore()
    return useInfiniteQuery({
        queryKey: queryKeyStore.posts.all._ctx.liked.queryKey,
        queryFn: ({ pageParam }) =>
            get<IPostsResponse>(apiRoutes.posts, {
                liked: true,
                page: pageParam,
                limit,
            }),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            return lastPage.nextPage
        },
    })
}

export default useGetLikedPosts
