import Cookies from 'js-cookie'
import { Navigate, Outlet } from 'react-router-dom'

const RequireAuth = () => {
    const token = Cookies.get('token')
    return token ? <Outlet /> : <Navigate to="/auth" />
}

export default RequireAuth
