import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

const ACCESS_TOKEN_KEY = 'accessToken'

interface IAuthData {
    accessToken?: string
}

const useAuthentication = () => {
    const [persist, setPersist] = useState(
        localStorage.getItem('persist') === 'persist'
    )
    const queryClient = useQueryClient()
    const auth: IAuthData | undefined = queryClient.getQueryData([
        ACCESS_TOKEN_KEY,
    ])
    const setAuthData = (authData: IAuthData) => {
        queryClient.setQueryData([ACCESS_TOKEN_KEY], authData)
    }
    return { auth, setAuthData, persist }
}

export default useAuthentication
