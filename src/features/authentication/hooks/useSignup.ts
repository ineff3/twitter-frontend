import { apiRoutes } from '../../../routes'
import { usePost } from '../../../utils/api/queries'
import { ISignupData, IUser } from '../interfaces/'

const useSignup = () => {
    return usePost<ISignupData, ISignupData, IUser>(apiRoutes.signUp)
}
export default useSignup
