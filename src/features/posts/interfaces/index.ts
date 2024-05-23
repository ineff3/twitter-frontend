interface IPostAuthor {
    id: string
    firstName: string
    secondName: string
    username: string
    userImage: string
}

export interface IPost {
    _id: string
    author: IPostAuthor
    likedBy: number
    isLiked: boolean
    isBookmarked: boolean
    dateCreated: string
    text?: string
    postImages: string[]
}

export interface CreatePostFormType {
    text: string
    postImages: { file: File }[]
}
