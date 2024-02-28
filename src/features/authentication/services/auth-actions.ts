import { usePost } from '../../../utils/api/queries'
import { ILoginData, ILoginResponse, ISignupData, IUser } from '../interfaces'

export const useSignup = () => {
    return usePost<ISignupData, ISignupData, IUser>('users/signup')
}

export const useLogin = () => {
    return usePost<ILoginData, ILoginData, ILoginResponse>('users/login')
}
