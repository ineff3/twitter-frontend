import NavMenu from './NavMenu'

const NavSidebar = () => {
    return (
        <div className=" fixed h-full w-[220px] border-r border-accent">
            <div className=" flex flex-col py-3 ">
                <div className=" mb-3 px-4">
                    <a className=" btn btn-ghost p-3">
                        <svg
                            width="21"
                            height="20"
                            viewBox="0 0 16 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.20002 0.0749817H0.212524L6.09777 7.92246L0.533149 14.325H2.42127L6.97272 9.08882L10.9 14.325H15.8875L9.75432 6.14691L15.0325 0.0749817H13.1444L8.87937 4.98126L5.20002 0.0749817ZM11.6125 12.9L3.06252 1.49998H4.48752L13.0375 12.9H11.6125Z"
                                fill="white"
                            />
                        </svg>
                    </a>
                </div>
                <div>
                    <NavMenu />
                </div>
            </div>
        </div>
    )
}

export default NavSidebar
