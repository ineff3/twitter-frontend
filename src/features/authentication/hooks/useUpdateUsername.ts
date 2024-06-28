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
    return useUpdate<IUserPreview, IUpdateUsernameBody>({
        path: apiRoutes.users,
        qKey: queryKeyStore.users.currentUserPreview.queryKey,
        updater: (oldData, newData) => ({
            ...oldData,
            ...newData,
        }),
    })
}

export default useUpdateUsername
