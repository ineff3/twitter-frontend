import { AxiosRequestConfig } from 'axios'
import useAxiosInstance from '../../hooks/useAxiosInstance'

export const useApi = () => {
    const axiosInstance = useAxiosInstance()
    return {
        get: <T>(url: string, params?: object) =>
            axiosInstance
                .get<T>(url, { params: params })
                .then((res) => res.data),

        post: <T>(url: string, data: any, options?: AxiosRequestConfig) =>
            axiosInstance.post<T>(url, data, options).then((res) => res.data),

        patch: <T>(url: string, data: any, options?: AxiosRequestConfig) =>
            axiosInstance.patch<T>(url, data, options).then((res) => res.data),
        put: <T>(url: string, data: any, options?: AxiosRequestConfig) =>
            axiosInstance.put<T>(url, data, options).then((res) => res.data),
        delete: <T>(url: string, options?: AxiosRequestConfig) =>
            axiosInstance.delete<T>(url, options).then((res) => res.data),
    }
}
