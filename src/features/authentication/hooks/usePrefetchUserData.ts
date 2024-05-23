import { useQueryClient } from '@tanstack/react-query'
import useQueryKeyStore from '../../../utils/api/useQueryKeyStore'

const usePrefetchUserData = () => {
    const queryClient = useQueryClient()
    const queryKeyStore = useQueryKeyStore()
    const prefetchUserData = async () => {
        await queryClient.prefetchQuery(queryKeyStore.users.currentUserPreview)
    }
    return prefetchUserData
}

export default usePrefetchUserData
