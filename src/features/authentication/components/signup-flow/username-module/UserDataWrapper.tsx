import { useQueryClient } from '@tanstack/react-query'
import { IUser } from '../../../interfaces'
import { apiRoutes } from '../../../../../routes'
import UsernameModule from './UsernameModule'

const UserDataWrapper = () => {
    const queryClient = useQueryClient()
    const userData: IUser | undefined = queryClient.getQueryData([
        apiRoutes.getAuthorizedUser,
    ])
    return <UsernameModule initialUsername={userData?.username} />
}

export default UserDataWrapper
