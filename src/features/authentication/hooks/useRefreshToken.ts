import useAuthentication from './useAuthentication'
import axios from 'axios'

interface IRefreshResponse {
    accessToken: string
}

const useRefreshToken = () => {
    const { setAccessToken } = useAuthentication()
    const refresh = async () => {
        const response = await axios
            .get<IRefreshResponse>('http://localhost:3000/users/refresh', {
                withCredentials: true,
            })
            .then((res) => res.data)
        setAccessToken(response.accessToken)
        return response.accessToken
    }
    return refresh
}

export default useRefreshToken
