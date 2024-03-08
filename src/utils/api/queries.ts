import {
    QueryKey,
    QueryOptions,
    UseQueryOptions,
    useMutation,
    useQuery,
    useQueryClient,
} from '@tanstack/react-query'
import { useApi } from './actions'

export const useFetch = <T>(
    url: string,
    params?: object | null,
    config?: Partial<UseQueryOptions<T, Error, T, QueryKey>>
) => {
    const { get } = useApi()
    const qKey = params ? [url, params] : [url]
    return useQuery({
        queryKey: qKey,
        queryFn: () => get<T>(url),
        ...config,
    })
}

export const useOptimisticMutation = <T, S, R>(
    func: (data: S) => Promise<R>,
    url?: string,
    params?: object | null,
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
    params?: object | null,
    updater?: (oldData: T, newData: S) => T
) => {
    const { post } = useApi()
    return useOptimisticMutation(
        (data) => post<R>(path, data),
        url,
        params,
        updater
    )
}

export const useUpdate = <T, S>(
    path: string,
    url?: string,
    params?: object | null,
    updater?: (oldData: T, updatedData: S) => T
) => {
    const { patch } = useApi()
    return useOptimisticMutation(
        (data) => patch(path, data),
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
    const { delete: del } = useApi()
    return useOptimisticMutation(
        (id) => del(`${path}/${id}`),
        url,
        params,
        updater
    )
}
