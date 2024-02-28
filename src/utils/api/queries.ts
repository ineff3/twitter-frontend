import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from './actions'

export const useOptimisticMutation = <T, S, R>(
    func: (data: S) => Promise<R>,
    url?: string,
    params?: object,
    updater?: (oldData: T, newData: S) => T
) => {
    const queryClient = useQueryClient()
    const qKey = params ? [url, params] : [url]
    return useMutation({
        mutationFn: func,
        onMutate: async (data) => {
            if (url) {
                // Cancel any outgoing refetches
                // (so they don't overwrite our optimistic update)
                await queryClient.cancelQueries({ queryKey: qKey })

                // Snapshot the previous value
                const previousData = queryClient.getQueryData(qKey)

                // Optimistically update to the new value
                queryClient.setQueryData(qKey, (oldData: T) => {
                    return updater ? updater(oldData, data) : data
                })

                // Return a context object with the snapshotted value
                return { previousData }
            }
        },
        // If the mutation fails,
        // use the context returned from onMutate to roll back
        onError(error, _, context) {
            console.log(error)
            if (url) {
                queryClient.setQueryData(qKey, context?.previousData)
            }
        },
        // Always refetch after error or success:
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: qKey,
            })
        },
    })
}

export const usePost = <T, S, R>(
    path: string,
    url?: string,
    params?: object,
    updater?: (oldData: T, newData: S) => T
) => {
    return useOptimisticMutation(
        (data) => api.post<R>(path, data),
        url,
        params,
        updater
    )
}

export const useUpdate = <T, S>(
    path: string,
    url: string,
    params?: object,
    updater?: (oldData: T, updatedData: S) => T
) => {
    return useOptimisticMutation(
        (data) => api.patch(path, data),
        url,
        params,
        updater
    )
}

export const useDelete = <T>(
    path: string,
    url: string,
    params?: object,
    updater?: (oldData: T, id: string | number) => T
) => {
    return useOptimisticMutation(
        (id) => api.delete(`${path}/${id}`),
        url,
        params,
        updater
    )
}