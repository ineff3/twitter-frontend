import { ReactNode, createContext, useState } from 'react'
import { AuthData, DataContextType } from '../interfaces'

export const AuthContext = createContext<DataContextType>({} as DataContextType)

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [auth, setAuth] = useState({} as AuthData)
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
