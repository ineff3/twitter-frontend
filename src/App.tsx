import { Route, Routes } from 'react-router-dom'
import BaseLayout from './layouts/BaseLayout'
import { RequireAuth, RequireUnAuth } from './features/authentication/index'
import {
    Auth,
    Bookmarks,
    Home,
    Messages,
    Notifications,
    Premium,
    Search,
    SignupPage,
} from './pages'

const App = () => {
    return (
        <>
            <Routes>
                <Route element={<RequireUnAuth />}>
                    <Route path="/auth" element={<Auth />}>
                        <Route path="signup" element={<SignupPage />} />
                    </Route>
                </Route>

                <Route element={<RequireAuth />}>
                    <Route element={<BaseLayout />}>
                        <Route path="/" element={<Home />} />
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
            </Routes>
        </>
    )
}

export default App
