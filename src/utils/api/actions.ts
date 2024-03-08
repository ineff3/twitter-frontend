import useAxiosInstance from '../../hooks/useAxiosInstance'

export const useApi = () => {
    const axiosInstance = useAxiosInstance()
    return {
        get: <T>(url: string) =>
            axiosInstance.get<T>(url).then((res) => res.data),

        post: <T>(url: string, data: any) =>
            axiosInstance.post<T>(url, data).then((res) => res.data),

        patch: <T>(url: string, data: any) =>
            axiosInstance.patch<T>(url, data).then((res) => res.data),

        delete: <T>(url: string) =>
            axiosInstance.delete<T>(url).then((res) => res.data),
    }
}
