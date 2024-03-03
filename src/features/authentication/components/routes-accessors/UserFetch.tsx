import { useFetch } from '../../../../utils/api/queries'
import { IUser } from '../../interfaces'
import { apiRoutes } from '../../../../routes'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

const UserFetch = () => {
    const [isLoading, setIsLoading] = useState(true)
    const user = useFetch<IUser>(apiRoutes.getAuthorizedUser, null, {
        staleTime: Infinity,
        gcTime: Infinity,
    })
    useEffect(() => {
        if (!user.isPending) {
            setIsLoading(false)
        }
    }, [user.isPending])
    return (
        <>
            {isLoading ? (
                <div className=" flex h-screen w-screen items-center justify-center">
                    <p className="loading loading-spinner w-14"></p>
                </div>
            ) : (
                <Outlet />
            )}
        </>
    )
}

export default UserFetch
