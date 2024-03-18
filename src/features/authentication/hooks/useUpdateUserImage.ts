import { apiRoutes } from '../../../routes'
import { useUpdate } from '../../../utils/api/queries'
import { IUser } from '../interfaces'

type IUpdateUserImage = FormData

const useUpdateUserImage = () => {
    return useUpdate<IUser, FormData>(
        apiRoutes.updateUserImage,
        apiRoutes.getAuthorizedUser,
        undefined,
        (oldData, updatedData) => ({
            ...oldData,
            ...updatedData,
        }),
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }
    )
}

export default useUpdateUserImage
