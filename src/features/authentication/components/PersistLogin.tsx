/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import useRefreshToken from '../hooks/useRefreshToken'
import useAuthentication from '../hooks/useAuthentication'
import { Outlet } from 'react-router-dom'

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true)
    const refresh = useRefreshToken()
    const { accessToken } = useAuthentication()

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                await refresh()
            } catch (err) {
                console.error(err)
            } finally {
                setIsLoading(false)
            }
        }
        !accessToken ? verifyRefreshToken() : setIsLoading(false)
    }, [])

    useEffect(() => {
        console.log(`isLoading: ${isLoading}`)
        console.log(`aT: ${JSON.stringify(accessToken)}`)
    }, [isLoading])

    return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>
}

export default PersistLogin
