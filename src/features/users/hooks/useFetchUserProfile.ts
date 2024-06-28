import { useQuery } from '@tanstack/react-query'
import useQueryKeyStore from '../../../utils/api/useQueryKeyStore'

const useFetchUserProfile = (username: string) => {
    const querykeyStore = useQueryKeyStore()
    return useQuery({
        ...querykeyStore.users.detail(username),
        staleTime: Infinity,
    })
}

export default useFetchUserProfile
