import { useAuthentication } from '..'
import { apiRoutes } from '../../../routes'
import axios from '../../../utils/api/axios'

const useLogout = () => {
    const { setAccessToken } = useAuthentication()
    const logout = async () => {
        try {
            setAccessToken('')
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
