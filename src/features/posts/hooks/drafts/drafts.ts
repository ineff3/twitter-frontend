import { useQuery } from '@tanstack/react-query'
import useQueryKeyStore from '../../../../utils/api/useQueryKeyStore'
import { useDelete, usePost } from '../../../../utils/api/queries'
import { apiRoutes } from '../../../../routes'

export const useGetDrafts = () => {
    const queryKeyStore = useQueryKeyStore()
    return useQuery({ ...queryKeyStore.posts.drafts })
}

export const useCreateDraft = () => {
    return usePost({
        path: apiRoutes.drafts,
        axiosOptions: {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        },
    })
}

export const useDeleteDraft = () => {
    return useDelete({ path: apiRoutes.drafts })
}
