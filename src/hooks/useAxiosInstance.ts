import { useEffect } from 'react'
import { useAuthentication, useRefreshToken } from '../features/authentication'
import { instance } from '../utils/api/axios'

const useAxiosInstance = () => {
    const refresh = useRefreshToken()
    const { auth } = useAuthentication()

    useEffect(() => {
        const requestIntercept = instance.interceptors.request.use(
            (config) => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] =
                        `Bearer ${auth?.accessToken}`
                }
                return config
            },
            (error) => Promise.reject(error)
        )

        const responseIntercept = instance.interceptors.response.use(
            (response) => response,
            async (error) => {
                // if accessToken expired we are trying to attach a new one created by refresh function
                const prevRequest = error?.config
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true
                    const newAccessToken = await refresh()
                    prevRequest.headers['Authorization'] =
                        `Bearer ${newAccessToken}`
                    return instance(prevRequest)
                }
                return Promise.reject(error)
            }
        )

        return () => {
            instance.interceptors.request.eject(requestIntercept)
            instance.interceptors.response.eject(responseIntercept)
        }
    }, [auth, refresh])

    return instance
}

export default useAxiosInstance
