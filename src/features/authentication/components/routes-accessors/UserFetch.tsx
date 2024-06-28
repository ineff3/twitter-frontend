import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query'
import usePrefetchUserData from '../../hooks/usePrefetchUserData'

const UserFetch = () => {
    const [isLoading, setIsLoading] = useState(true)

    const prefetchUserData = usePrefetchUserData()

    useEffect(() => {
        const prefetchUser = async () => {
            try {
                await prefetchUserData()
            } catch (err) {
                console.error(err)
            } finally {
                setIsLoading(false)
            }
        }
        prefetchUser()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
