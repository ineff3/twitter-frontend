import { IUser } from '../../authentication/interfaces'

interface IPostAuthor {
    id: string
    firstName: string
    secondName: string
    username: string
    userImage: string
}

export interface IPost {
    author: IPostAuthor
    liked: string[]
    dateCreated: string
    text?: string
    postImages: string[]
}

export interface CreatePostFormType {
    text: string
    postImages: { file: File }[]
}
