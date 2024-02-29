import React, { useEffect } from 'react'
import useRefreshToken from '../features/authentication/hooks/useRefreshToken'
import { useApi } from '../utils/api/actions'
import { useGet } from '../utils/api/queries'
import { useNavigate } from 'react-router-dom'
import useAuthentication from '../features/authentication/hooks/useAuthentication'

const Search = () => {
    const navigate = useNavigate()
    const refresh = useRefreshToken()
    const { setAccessToken } = useAuthentication()
    // const { data, status, error } = useGet('users', 'users')

    const { get } = useApi()

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await get('users')
                console.log(response)
            } catch (err) {
                setAccessToken('')
                navigate('/auth')
            }
        }
        getUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <button onClick={refresh} className=" btn btn-primary">
                lol
            </button>
        </div>
    )
}

export default Search
