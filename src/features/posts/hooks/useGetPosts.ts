import { useQuery } from '@tanstack/react-query'
import useQueryKeyStore from '../../../utils/api/useQueryKeyStore'

const useGetPosts = () => {
    const queryKeyStore = useQueryKeyStore()
    return useQuery(queryKeyStore.posts.all)
}

export default useGetPosts
