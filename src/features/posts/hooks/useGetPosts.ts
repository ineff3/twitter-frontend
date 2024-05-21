import { apiRoutes } from '../../../routes'
import { useFetch } from '../../../utils/api/queries'
import { IPost } from '../interfaces'

const useGetPosts = () => {
    return useFetch<IPost[]>(apiRoutes.getAllPosts, null, {
        // staleTime: Infinity,
    })
}

export default useGetPosts
