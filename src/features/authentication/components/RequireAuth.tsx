import { useQueryClient } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { Navigate, Outlet } from 'react-router-dom'
import { ACCESS_TOKEN_KEY } from '../../../routes'

const RequireAuth = () => {
    // const token = Cookies.get('token')
    const queryClient = useQueryClient()
    const token = queryClient.getQueryData([ACCESS_TOKEN_KEY])

    return token ? <Outlet /> : <Navigate to="/auth" />
}

export default RequireAuth
