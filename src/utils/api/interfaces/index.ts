import { IUser } from '../../../features/authentication/interfaces'
import { IPost } from '../../../features/posts/interfaces'

export interface IUserDetailResponse {
    isCurrentUser: boolean
    userData: IUser
}
export interface IUsernamesResponse {
    usernames: string[]
}
export interface IPostsResponse {
    data: IPost[]
    nextPage: number | null
    totalPages: number
}
