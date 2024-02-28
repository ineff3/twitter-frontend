import Cookies from 'js-cookie'
import { Navigate, Outlet } from 'react-router-dom'

const RequireUnAuth = () => {
    const token = Cookies.get('token')
    return token ? <Navigate to="/" /> : <Outlet />
}

export default RequireUnAuth
