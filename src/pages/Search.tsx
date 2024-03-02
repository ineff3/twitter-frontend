import { useEffect } from 'react'
import useRefreshToken from '../features/authentication/hooks/useRefreshToken'
import { useApi } from '../utils/api/actions'
import { useNavigate } from 'react-router-dom'
import useLogout from '../features/authentication/hooks/useLogout'
import { useAuthentication } from '../features/authentication'

const Search = () => {
    const navigate = useNavigate()
    const refresh = useRefreshToken()
    const { setAuthData } = useAuthentication()
    const logout = useLogout()
    // const { data, status, error } = useGet('users', 'users')

    const { get } = useApi()

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await get('users')
                console.log(response)
            } catch (err) {
                setAuthData({})
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
            <button
                onClick={async () => {
                    await logout()
                    navigate('/auth')
                }}
                className=" btn btn-success"
            >
                Logout
            </button>
        </div>
    )
}

export default Search
