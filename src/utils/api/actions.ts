import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000/',
})

export const api = {
    get: <T>(url: string) => instance.get<T>(url).then((res) => res.data),

    post: <T>(url: string, data: any) =>
        instance.post<T>(url, data).then((res) => res.data),

    patch: <T>(url: string, data: any) =>
        instance.patch<T>(url, data).then((res) => res.data),

    delete: <T>(url: string) => instance.delete<T>(url).then((res) => res.data),
}
