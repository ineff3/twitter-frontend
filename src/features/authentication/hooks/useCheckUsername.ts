import { apiRoutes } from '../../../routes'
import { usePost } from '../../../utils/api/queries'

interface IResponse {
    isReserved: boolean
}
interface IBodyData {
    username: string
}

const useCheckUsername = () => {
    return usePost<IBodyData, IBodyData, IResponse>(apiRoutes.checkUsername)
}

export default useCheckUsername
