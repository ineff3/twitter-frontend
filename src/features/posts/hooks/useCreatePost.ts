import { apiRoutes } from '../../../routes'
import { usePost } from '../../../utils/api/queries'
import { IPost } from '../interfaces'

interface IPostCreateData {
    text?: string
    postImage?: string
}

const useCreatePost = () => {
    return usePost<IPostCreateData[], FormData, IPost>(
        apiRoutes.createPost,
        undefined,
        null,
        undefined,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }
    )
}

export default useCreatePost
