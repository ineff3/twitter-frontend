import { apiRoutes } from '../../../routes'
import { useUpdate } from '../../../utils/api/queries'
import { IUser } from '../interfaces'

interface IUpdatedUsername {
    username: string
}

const useUpdateUsername = () => {
    return useUpdate<IUser, IUpdatedUsername>(
        apiRoutes.updateUsername,
        apiRoutes.getAuthorizedUser,
        null,
        (oldData, newData) => ({
            ...oldData,
            ...newData,
        })
    )
}

export default useUpdateUsername
