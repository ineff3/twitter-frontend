import { Route, Routes } from 'react-router-dom'
import BaseLayout from './layouts/BaseLayout'
import Home from './pages/Home'
import Search from './pages/Search'
import Notifications from './pages/Notifications'
import Messages from './pages/Messages'
import Bookmarks from './pages/Bookmarks'
import Premium from './pages/Premium'
import Auth from './pages/Auth'
import SignupPage from './pages/Signup'

const App = () => {
    return (
        <>
            <Routes>
                <Route path="auth" element={<Auth />}>
                    <Route path="signup" element={<SignupPage />} />
                </Route>
                <Route element={<BaseLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/bookmarks" element={<Bookmarks />} />
                    <Route path="/premium" element={<Premium />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
