import { createQueryKeyStore } from '@lukemorales/query-key-factory'
import { useApi } from './actions'
import { IPost } from '../../features/posts/interfaces'
import { apiRoutes } from '../../routes'
import { IUserPreview } from '../../features/authentication/interfaces'
import {
    IPostsResponse,
    IUserDetailResponse,
    IUsernamesResponse,
} from './interfaces'

const useQueryKeyStore = () => {
    const { get } = useApi()
    const queries = createQueryKeyStore({
        posts: {
            all: {
                queryKey: null,
                contextQueries: {
                    bookmarked: {
                        queryKey: null,
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
