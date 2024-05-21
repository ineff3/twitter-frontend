import { apiRoutes } from '../../../routes'
import { useFetch } from '../../../utils/api/queries'
import { IPost } from '../interfaces'

const useGetBookmarkedPosts = () => {
    return useFetch<IPost[]>(apiRoutes.getAllPosts, { bookmarked: true })
}

export default useGetBookmarkedPosts
