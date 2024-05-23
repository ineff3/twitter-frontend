import { createQueryKeyStore } from '@lukemorales/query-key-factory'
import { useApi } from './actions'
import { IPost } from '../../features/posts/interfaces'
import { apiRoutes } from '../../routes'
import { IUser, IUserPreview } from '../../features/authentication/interfaces'

interface IUserDetailResponse {
    isCurrentUser: boolean
    userData: IUser
}
interface IUsernamesResponse {
    usernames: string[]
}

const useQueryKeyStore = () => {
    const { get } = useApi()
    const queries = createQueryKeyStore({
        posts: {
            all: {
                queryKey: null,
                queryFn: () => get<IPost[]>(apiRoutes.posts),
                contextQueries: {
                    bookmarked: {
                        queryKey: null,
                        queryFn: () =>
                            get<IPost[]>(apiRoutes.posts, { bookmarked: true }),
                    },
                },
            },
        },

        users: {
            currentUserPreview: {
                queryKey: null,
                queryFn: () => get<IUserPreview>(apiRoutes.currentUserPreview),
            },
            detail: (username: string) => ({
                queryKey: [username],
                queryFn: () =>
                    get<IUserDetailResponse>(`${apiRoutes.users}/${username}`),
            }),
            usernames: {
                queryKey: null,
                queryFn: () =>
                    get<IUsernamesResponse>(apiRoutes.getUsernamesArray),
            },
        },
    })

    return queries
}

export default useQueryKeyStore
