import { useQuery } from '@tanstack/react-query'
import useQueryKeyStore from '../../../utils/api/useQueryKeyStore'

const useGetBookmarkedPosts = () => {
    const queryKeysStore = useQueryKeyStore()
    return useQuery(queryKeysStore.posts.all._ctx.bookmarked)
}

export default useGetBookmarkedPosts
