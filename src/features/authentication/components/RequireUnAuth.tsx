import { useQueryClient } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { Navigate, Outlet } from 'react-router-dom'
import { ACCESS_TOKEN_KEY } from '../../../routes'

const RequireUnAuth = () => {
    // const token = Cookies.get('token')
    const queryClient = useQueryClient()
    const token = queryClient.getQueryData([ACCESS_TOKEN_KEY])
    return token ? <Navigate to="/" /> : <Outlet />
}

export default RequireUnAuth
