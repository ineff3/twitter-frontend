export const apiRoutes = {
    //user
    users: 'users',
    refreshToken: 'users/refresh',
    login: 'users/login',
    logout: 'users/logout',
    signUp: 'users/signup',
    currentUserPreview: 'users/currentUserPreview',
    getUsernamesArray: 'users/usernames',
    checkUsername: 'users/checkUsernameIsReserved',
    //posts
    posts: 'posts',
    likePost: 'posts/like',
    bookmarkPost: 'posts/bookmark',
}

export const pageRoutes = {
    home: '/',
    auth: '/auth',
    profile: '/:username',
    authSignup: '/auth/signup',
    signupFlow: '/signup-flow',
}
