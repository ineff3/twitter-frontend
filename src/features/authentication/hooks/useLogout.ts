import { useAuthentication } from '..'
import { apiRoutes } from '../../../routes'
import axios from '../../../utils/api/axios'

const useLogout = () => {
    const { setAuthData } = useAuthentication()
    const logout = async () => {
        try {
            localStorage.removeItem('persist')
            setAuthData({})
            const response = await axios.get(apiRoutes.logout, {
                withCredentials: true,
            })
        } catch (err) {
            console.log(err)
        }
    }
    return logout
}

export default useLogout
