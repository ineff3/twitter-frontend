import { useAuthentication } from '..'
import { apiRoutes } from '../../../routes'

import axios from '../../../utils/api/axios'

interface IRefreshResponse {
    accessToken: string
}

const useRefreshToken = () => {
    const { setAccessToken } = useAuthentication()
    const refresh = async () => {
        const response = await axios
            .get<IRefreshResponse>(apiRoutes.refreshToken, {
                withCredentials: true,
            })
            .then((res) => res.data)
        setAccessToken(response.accessToken)
        return response.accessToken
    }
    return refresh
}

export default useRefreshToken
