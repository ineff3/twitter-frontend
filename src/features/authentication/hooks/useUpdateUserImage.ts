import { apiRoutes } from '../../../routes'
import { useUpdate } from '../../../utils/api/queries'
import useQueryKeyStore from '../../../utils/api/useQueryKeyStore'
import { IUserPreview } from '../interfaces'

const useUpdateUserImage = () => {
    const queryKeyStore = useQueryKeyStore()
    return useUpdate<IUserPreview, FormData>({
        path: apiRoutes.users,
        qKey: queryKeyStore.users.currentUserPreview.queryKey,
        updater: (oldData, updatedData) => ({
            ...oldData,
            ...updatedData,
        }),
        axiosOptions: {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        },
    })
}

export default useUpdateUserImage
