import { apiRoutes } from '../../../routes'
import { usePut } from '../../../utils/api/queries'
import { IUser } from '../../authentication/interfaces'

const useEditProfile = () => {
    return usePut<IUser, FormData, IUser>(apiRoutes.users, null, undefined, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}

export default useEditProfile
