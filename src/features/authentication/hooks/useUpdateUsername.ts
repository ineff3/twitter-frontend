import { apiRoutes } from '../../../routes'
import { useUpdate } from '../../../utils/api/queries'
import useQueryKeyStore from '../../../utils/api/useQueryKeyStore'
import { IUserPreview } from '../interfaces'

interface IUpdateUsernameBody {
    updateType: string
    newValue: string
}

const useUpdateUsername = () => {
    const queryKeyStore = useQueryKeyStore()
    return useUpdate<IUserPreview, IUpdateUsernameBody>(
        apiRoutes.users,
        queryKeyStore.users.currentUserPreview.queryKey,
        (oldData, newData) => ({
            ...oldData,
            ...newData,
        })
    )
}

export default useUpdateUsername
