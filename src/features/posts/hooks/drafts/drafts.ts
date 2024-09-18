import { useQuery } from '@tanstack/react-query'
import useQueryKeyStore from '../../../../utils/api/useQueryKeyStore'
import {
    useDelete,
    useDeleteMultiple,
    usePost,
} from '../../../../utils/api/queries'
import { apiRoutes } from '../../../../routes'
import { IDraft } from '../../interfaces'

export const useGetDrafts = () => {
    const queryKeyStore = useQueryKeyStore()
    return useQuery({ ...queryKeyStore.posts.drafts })
}

export const useCreateDraft = () => {
    const queryKeyStore = useQueryKeyStore()
    return usePost({
        path: apiRoutes.drafts,
        qKey: queryKeyStore.posts.drafts.queryKey,
        axiosOptions: {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        },
    })
}

export const useDeleteDraft = () => {
    const queryKeyStore = useQueryKeyStore()
    return useDelete<IDraft[], string>({
        path: apiRoutes.drafts,
        qKey: queryKeyStore.posts.drafts.queryKey,
        updater: (oldData, draftId) => [
            ...oldData.filter((draft) => draft._id !== String(draftId)),
        ],
    })
}

export const useDeleteMultipleDrafts = () => {
    const queryKeyStore = useQueryKeyStore()
    return useDeleteMultiple<IDraft[]>({
        path: apiRoutes.drafts,
        qKey: queryKeyStore.posts.drafts.queryKey,
        updater: (oldData, draftIds) => [
            ...oldData.filter((draft) => !draftIds.value.includes(draft._id)),
        ],
    })
}
