import { useQueryClient } from '@tanstack/react-query'
import { ACCESS_TOKEN_KEY } from '../../../routes'

const useAuthentication = () => {
    const queryClient = useQueryClient()
    const accessToken = queryClient.getQueryData([ACCESS_TOKEN_KEY])
    const setAccessToken = (accessToken: string) => {
        queryClient.setQueryData([ACCESS_TOKEN_KEY], accessToken)
    }
    return { accessToken, setAccessToken }
}

export default useAuthentication
