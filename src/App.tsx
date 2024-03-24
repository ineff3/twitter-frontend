import { Route, Routes } from 'react-router-dom'
import BaseLayout from './layouts/BaseLayout'
import {
    FlowController,
    RouteAuth,
    UserFetch,
} from './features/authentication/index'
import {
    Auth,
    Bookmarks,
    Home,
    Messages,
    Notifications,
    Premium,
    Profile,
    Search,
    SignupPage,
} from './pages'
import { pageRoutes } from './routes'

const App = () => {
    return (
        <>
            <Routes>
                <Route element={<RouteAuth />}>
                    <Route path={pageRoutes.auth} element={<Auth />}>
                        <Route path="signup" element={<SignupPage />} />
                    </Route>
                </Route>
                <Route element={<RouteAuth required />}>
                    <Route element={<UserFetch />}>
                        <Route element={<BaseLayout />}>
                            <Route
                                path={pageRoutes.signupFlow}
                                element={<FlowController />}
                            />
                            <Route path={pageRoutes.home} element={<Home />} />
                            <Route
                                path={pageRoutes.profile}
                                element={<Profile />}
                            />
                            <Route path="/search" element={<Search />} />
                            <Route
                                path="/notifications"
                                element={<Notifications />}
                            />
                            <Route path="/messages" element={<Messages />} />
                            <Route path="/bookmarks" element={<Bookmarks />} />
                            <Route path="/premium" element={<Premium />} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </>
    )
}

export default App
