import { Route, Routes, useLocation } from 'react-router-dom'
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
    PostModal,
    Premium,
    Profile,
    Search,
    SignupPage,
} from './pages'
import { pageRoutes } from './routes'
import { DraftsContent } from './features/posts'

const App = () => {
    const location = useLocation()
    const state = location.state as { backgroundLocation?: Location }

    return (
        <>
            <Routes location={state?.backgroundLocation || location}>
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

            {/* Render the modal if the backgroundLocation is set */}
            {state?.backgroundLocation && (
                <Routes>
                    <Route path={pageRoutes.post} element={<PostModal />}>
                        <Route
                            path={pageRoutes.drafts}
                            element={<DraftsContent />}
                        />
                    </Route>
                </Routes>
            )}
        </>
    )
}

export default App
