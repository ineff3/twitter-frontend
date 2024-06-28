import { createQueryKeyStore } from '@lukemorales/query-key-factory'
import { useApi } from './actions'
import { apiRoutes } from '../../routes'
import { IUserPreview } from '../../features/authentication/interfaces'
import { IUserDetailResponse, IUsernamesResponse } from './interfaces'
import { IDraft } from '../../features/posts/interfaces'

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
                    liked: {
                        queryKey: null,
                    },
                    user: (userId: string) => ({
                        queryKey: [userId],
                    }),
                },
            },
            drafts: {
                queryKey: null,
                queryFn: () => get<IDraft[]>(apiRoutes.drafts),
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
