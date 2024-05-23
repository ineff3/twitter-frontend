import { QueryKey, useMutation, useQueryClient } from '@tanstack/react-query'
import { useApi } from './actions'
import { AxiosRequestConfig } from 'axios'

export const useOptimisticMutation = <T, S, R>(
    func: (data: S) => Promise<R>,
    qKey?: QueryKey | null,
    updater?: (oldData: T, newData: S) => T
) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: func,
        onMutate: async (data) => {
            if (qKey) {
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
            if (qKey) {
                queryClient.setQueryData(qKey, context?.previousData)
            }
        },
        // Always refetch after error or success:
        onSettled: () => {
            if (qKey) {
                queryClient.invalidateQueries({
                    queryKey: qKey,
                })
            }
        },
    })
}

export const usePost = <T, S, R>(
    path: string,
    qKey?: QueryKey | null,
    updater?: (oldData: T, newData: S) => T,
    axiosOptions?: AxiosRequestConfig
) => {
    const { post } = useApi()
    return useOptimisticMutation(
        (data) => {
            if (axiosOptions) {
                return post<R>(path, data, axiosOptions)
            }
            return post<R>(path, data)
        },
        qKey,
        updater
    )
}

export const useUpdate = <T, S>(
    path: string,
    qKey?: QueryKey | null,
    updater?: (oldData: T, updatedData: S) => T,
    axiosOptions?: AxiosRequestConfig
) => {
    const { patch } = useApi()
    return useOptimisticMutation(
        (data) => {
            if (axiosOptions) {
                return patch(path, data, axiosOptions)
            }
            return patch(path, data)
        },
        qKey,
        updater
    )
}

export const useDelete = <T>(
    path: string,
    qKey?: QueryKey | null,
    updater?: (oldData: T, id: string | number) => T
) => {
    const { delete: del } = useApi()
    return useOptimisticMutation((id) => del(`${path}/${id}`), qKey, updater)
}
