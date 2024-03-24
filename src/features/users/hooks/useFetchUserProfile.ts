import { apiRoutes } from '../../../routes'
import { useFetch } from '../../../utils/api/queries'
import { IUser } from '../../authentication/interfaces'

interface IResponse {
    isCurrentUser: boolean
    userData: IUser
}
interface IData {
    username: string
}

const useFetchUserProfile = (username: string) => {
    return useFetch<IResponse>(apiRoutes.fetchUserProfile(username), null, {
        gcTime: Infinity,
    })
}

export default useFetchUserProfile
