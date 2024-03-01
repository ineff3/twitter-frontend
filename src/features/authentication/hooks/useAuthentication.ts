import { useQueryClient } from '@tanstack/react-query'

const ACCESS_TOKEN_KEY = 'accessToken'

const useAuthentication = () => {
    const queryClient = useQueryClient()
    const accessToken = queryClient.getQueryData([ACCESS_TOKEN_KEY])
    const setAccessToken = (accessToken: string) => {
        queryClient.setQueryData([ACCESS_TOKEN_KEY], accessToken)
    }
    return { accessToken, setAccessToken }
}

export default useAuthentication
