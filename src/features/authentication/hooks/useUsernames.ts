import { useQuery } from '@tanstack/react-query'
import useQueryKeyStore from '../../../utils/api/useQueryKeyStore'

const useUsernames = () => {
    const queryKeyStore = useQueryKeyStore()
    return useQuery(queryKeyStore.users.usernames)
}

export default useUsernames
