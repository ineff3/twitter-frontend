export const apiRoutes = {
    //user
    users: 'users',
    refreshToken: 'users/refresh',
    login: 'users/login',
    logout: 'users/logout',
    signUp: 'users/signup',
    currentUserPreview: 'users/preview',
    getUsernamesArray: 'users/usernames',
    checkUsername: 'users/check-username',
    //posts
    posts: 'posts',
    likePost: (postId: string) => `posts/${postId}/like`,
    bookmarkPost: (postId: string) => `posts/${postId}/bookmark`,
    //drafts
    drafts: 'drafts',
}

export const pageRoutes = {
    home: '/',
    auth: '/auth',
    profile: '/users/:username',
    authSignup: '/auth/signup',
    signupFlow: '/signup-flow',
    post: '/post',
    drafts: 'drafts',
}
