import { useQueryClient } from '@tanstack/react-query'
import { apiRoutes } from '../../../routes'
import { useApi } from '../../../utils/api/actions'
import { IUser } from '../interfaces'

const usePrefetchUserData = () => {
    const queryClient = useQueryClient()
    const { get } = useApi()
    const prefetchUserData = async () => {
        await queryClient.prefetchQuery({
            queryKey: [apiRoutes.getAuthorizedUser],
            queryFn: () => get<IUser>(apiRoutes.getAuthorizedUser),
        })
    }
    return prefetchUserData
}

export default usePrefetchUserData
