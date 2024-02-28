export interface ISignupData {
    firstName: string
    secondName: string
    email: string
    password: string
    confirmPassword: string
}
export interface ILoginData {
    email: string
    password: string
}
export interface IUser extends ISignupData {}

export interface ILoginResponse {
    message: string
    token: string
    user: IUser
}

// Auth Context
export interface DataContextType {
    auth: AuthData
    setAuth: (values: AuthData) => void
}

export interface AuthData {
    user: IUser
    accessToken: string
}
