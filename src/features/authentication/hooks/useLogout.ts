import { useQueryClient } from '@tanstack/react-query'
import { useAuthentication } from '..'
import { apiRoutes } from '../../../routes'
import axios from '../../../utils/api/axios'

const useLogout = () => {
    const { setAuthData } = useAuthentication()
    const queryClient = useQueryClient()
    const logout = async () => {
        try {
            // queryClient.removeQueries({
            //     queryKey: [apiRoutes.getAuthorizedUser],
            //     exact: true,
            // })
            queryClient.invalidateQueries()
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
