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
}

export const pageRoutes = {
    home: '/',
    auth: '/auth',
    authSignup: '/auth/signup',
    signupFlow: '/signup-flow',
}
