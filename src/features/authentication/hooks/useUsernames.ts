import { apiRoutes } from '../../../routes'
import { useFetch } from '../../../utils/api/queries'

interface IUsernamesResponse {
    usernames: string[]
}

const useUsernames = () => {
    return useFetch<IUsernamesResponse>(apiRoutes.getUsernamesArray)
}

export default useUsernames
