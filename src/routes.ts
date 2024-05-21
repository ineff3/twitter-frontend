export const apiRoutes = {
    //auth
    refreshToken: 'users/refresh',
    login: 'users/login',
    logout: 'users/logout',
    signUp: 'users/signup',
    //user
    getAuthorizedUser: 'users/getAuthorizedUser',
    getUsernamesArray: 'users/getPossibleUsernames',
    checkUsername: 'users/checkUsernameIsReserved',
    updateUsername: 'users/updateUsername',
    updateUserImage: 'users/updateUserImage',
    fetchUserProfile: (username: string) => {
        return `users/${username}`
    },
    //posts
    getAllPosts: 'posts/getPosts',
    createPost: 'posts/createPost',
    likePost: 'posts/likePost',
    bookmarkPost: 'posts/bookmarkPost',
    getBookmarkedPosts: 'posts/getBookmarkedPosts',
}

export const pageRoutes = {
    home: '/',
    auth: '/auth',
    profile: '/:username',
    authSignup: '/auth/signup',
    signupFlow: '/signup-flow',
}
