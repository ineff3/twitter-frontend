import axios from 'axios'
import useAuthentication from './useAuthentication'

const useLogout = () => {
    const { setAccessToken } = useAuthentication()
    const logout = async () => {
        try {
            setAccessToken('')
            const response = axios.get('http://localhost:3000/users/logout', {
                withCredentials: true,
            })
        } catch (err) {
            console.log(err)
        }
    }
    return logout
}

export default useLogout
