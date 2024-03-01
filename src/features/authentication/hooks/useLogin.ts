import { apiRoutes } from '../../../routes'
import { usePost } from '../../../utils/api/queries'
import { ILoginData, ILoginResponse } from '../interfaces/'

const useLogin = () => {
    return usePost<ILoginData, ILoginData, ILoginResponse>(apiRoutes.login)
}

export default useLogin
