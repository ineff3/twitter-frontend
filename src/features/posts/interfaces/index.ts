interface IPostAuthor {
    id: string
    firstName: string
    secondName: string
    username: string
    userImage: string
    userImageUrl: string
}

export interface IPost {
    _id: string
    author: IPostAuthor
    likesCount: number
    isLiked: boolean
    isBookmarked: boolean
    createdAt: string
    text?: string
    postImages: string[]
    postImageUrls: string[]
}

export interface CreatePostFormType {
    text: string
    postImages: { file: File }[]
}

export interface IDraft {
    _id: string
    text: string
    draftImageUrls: string[]
}
