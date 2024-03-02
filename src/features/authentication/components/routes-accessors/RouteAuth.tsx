/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import useRefreshToken from '../../hooks/useRefreshToken'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuthentication } from '../..'
import { pageRoutes } from '../../../../routes'

const PersistLogin = ({ required = false }: { required?: boolean }) => {
    const [isLoading, setIsLoading] = useState(true)
    const refresh = useRefreshToken()
    const { auth, persist } = useAuthentication()
    const location = useLocation()

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
        !auth?.accessToken && persist
            ? verifyRefreshToken()
            : setIsLoading(false)
    }, [])

    // useEffect(() => {
    //     console.log(`isLoading: ${isLoading}`)
    //     console.log(`aT: ${JSON.stringify(auth)}`)
    // }, [isLoading])

    if (required) {
        return (
            <>
                {isLoading ? (
                    <div className=" flex h-screen w-screen items-center justify-center">
                        <p className="loading loading-spinner w-14"></p>
                    </div>
                ) : auth?.accessToken ? (
                    <Outlet />
                ) : (
                    <Navigate
                        to={pageRoutes.auth}
                        replace
                        state={{ from: location }}
                    />
                )}
            </>
        )
    }

    return (
        <>
            {isLoading ? (
                <div className=" flex h-screen w-screen items-center justify-center">
                    <p className="loading loading-spinner w-14"></p>
                </div>
            ) : auth?.accessToken ? (
                <Navigate to={pageRoutes.home} />
            ) : (
                <Outlet />
            )}
        </>
    )
}

export default PersistLogin
