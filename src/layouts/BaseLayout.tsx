import { Outlet } from 'react-router-dom'
import NavSidebar from './components/NavSidebar'
import NewsSidebar from './components/NewsSidebar'

const BaseLayout = () => {
    return (
        <div className="flex justify-between">
            <div className=" w-full max-w-[220px]">
                <NavSidebar />
            </div>
            <div className=" w-full max-w-screen-lg ">
                <Outlet />
            </div>
            <div className=" w-full  max-w-[230px]">
                <NewsSidebar />
            </div>
        </div>
    )
}

export default BaseLayout
