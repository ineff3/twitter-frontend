export const apiRoutes = {
    refreshToken: 'users/refresh',
    login: 'users/login',
    logout: 'users/logout',
    signUp: 'users/signup',
    getAuthorizedUser: 'users/getAuthorizedUser',
    getUsernamesArray: 'users/getPossibleUsernames',
    checkUsername: 'users/checkUsernameIsReserved',
    updateUsername: 'users/updateUsername',
    updateUserImage: 'users/updateUserImage',
    fetchUserProfile: (username: string) => {
        return `users/${username}`
    },
}

export const pageRoutes = {
    home: '/',
    auth: '/auth',
    profile: '/:username',
    authSignup: '/auth/signup',
    signupFlow: '/signup-flow',
}
