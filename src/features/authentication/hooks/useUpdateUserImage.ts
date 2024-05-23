import { apiRoutes } from '../../../routes'
import { useUpdate } from '../../../utils/api/queries'
import useQueryKeyStore from '../../../utils/api/useQueryKeyStore'
import { IUserPreview } from '../interfaces'

const useUpdateUserImage = () => {
    const queryKeyStore = useQueryKeyStore()
    return useUpdate<IUserPreview, FormData>(
        apiRoutes.users,
        queryKeyStore.users.currentUserPreview.queryKey,
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
