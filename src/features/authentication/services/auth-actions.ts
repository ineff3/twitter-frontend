import { usePost } from '../../../utils/api/queries'
import { ISignupData } from '../interfaces'

export const useSignup = () => {
    return usePost<ISignupData, ISignupData>('users/signup')
}
