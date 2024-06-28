import { NavLink, useLocation } from 'react-router-dom'

const menuItems = [
    {
        path: '/',
        name: 'Home',
        svg: (
            <svg
                width="20"
                height="20"
                viewBox="0 0 13 13"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M11.3988 3.84936L7.97877 1.45655C7.04658 0.803426 5.61564 0.839052 4.71908 1.53374L1.74439 3.8553C1.15064 4.31843 0.68158 5.26843 0.68158 6.01655V10.1134C0.68158 11.6275 1.91064 12.8625 3.4247 12.8625H9.82533C11.3394 12.8625 12.5685 11.6334 12.5685 10.1194V6.09374C12.5685 5.29218 12.0519 4.30655 11.3988 3.84936ZM7.07033 10.4875C7.07033 10.7309 6.86845 10.9328 6.62502 10.9328C6.38158 10.9328 6.1797 10.7309 6.1797 10.4875V8.70624C6.1797 8.4628 6.38158 8.26093 6.62502 8.26093C6.86845 8.26093 7.07033 8.4628 7.07033 8.70624V10.4875Z" />
            </svg>
        ),
    },
    {
        path: '/search',
        name: 'Search',
        svg: (
            <svg
                width="20"
                height="20"
                viewBox="0 0 15 16"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M7.32819 13.3187C10.4434 13.3187 12.9688 10.7933 12.9688 7.6781C12.9688 4.56287 10.4434 2.03748 7.32819 2.03748C4.21295 2.03748 1.68756 4.56287 1.68756 7.6781C1.68756 10.7933 4.21295 13.3187 7.32819 13.3187Z" />
                <path d="M13.5625 13.9125L12.375 12.725" />
            </svg>
        ),
    },
    {
        path: '/notifications',
        name: 'Notifications',
        svg: (
            <svg
                width="20"
                height="20"
                viewBox="0 0 15 16"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M7.63673 2.62778C5.67142 2.62778 4.07423 4.22496 4.07423 6.19028V7.90621C4.07423 8.2684 3.91985 8.82059 3.73579 9.12934L3.05298 10.2634C2.63142 10.964 2.92235 11.7418 3.69423 12.0031C6.25329 12.8581 9.01423 12.8581 11.5733 12.0031C12.2917 11.7656 12.6064 10.9165 12.2145 10.2634L11.5317 9.12934C11.3536 8.82059 11.1992 8.2684 11.1992 7.90621V6.19028C11.1992 4.2309 9.5961 2.62778 7.63673 2.62778Z" />
                <path d="M8.73539 2.8C8.55133 2.74657 8.36133 2.705 8.16539 2.68125C7.59539 2.61 7.04914 2.65157 6.53851 2.8C6.7107 2.36063 7.1382 2.05188 7.63695 2.05188C8.1357 2.05188 8.5632 2.36063 8.73539 2.8Z" />
                <path d="M9.41806 12.2169C9.41806 13.1965 8.6165 13.9981 7.63681 13.9981C7.14994 13.9981 6.69868 13.7962 6.37806 13.4756C6.05743 13.155 5.85556 12.7037 5.85556 12.2169" />
            </svg>
        ),
    },
    {
        path: '/messages',
        name: 'Messages',
        svg: (
            <svg
                width="20"
                height="20"
                viewBox="0 0 15 16"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M10.5938 13.1219H4.65628C2.87503 13.1219 1.68753 12.2312 1.68753 10.1531V5.99686C1.68753 3.91873 2.87503 3.02811 4.65628 3.02811H10.5938C12.375 3.02811 13.5625 3.91873 13.5625 5.99686V10.1531C13.5625 12.2312 12.375 13.1219 10.5938 13.1219Z" />
                <path d="M10.5938 6.29373L8.73534 7.77811C8.12378 8.26498 7.12034 8.26498 6.50878 7.77811L4.65628 6.29373" />
            </svg>
        ),
    },
    {
        path: '/bookmarks',
        name: 'Bookmarks',
        svg: (
            <svg
                width="20"
                height="20"
                viewBox="0 0 15 15"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M10.4869 1.18748H4.76316C3.49847 1.18748 2.47128 2.22061 2.47128 3.47936V11.8453C2.47128 12.914 3.23722 13.3653 4.17535 12.8487L7.07284 11.2397C7.38159 11.0675 7.88034 11.0675 8.18316 11.2397L11.0807 12.8487C12.0188 13.3712 12.7847 12.92 12.7847 11.8453V3.47936C12.7788 2.22061 11.7516 1.18748 10.4869 1.18748Z" />
            </svg>
        ),
    },
    {
        path: '/premium',
        name: 'Premium',
        svg: (
            <svg
                width="20"
                height="20"
                viewBox="0 0 15 15"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M4.11597 7.93499H5.95066V12.21C5.95066 13.2075 6.49097 13.4094 7.15003 12.6612L11.6447 7.55499C12.1969 6.93155 11.9653 6.41499 11.1282 6.41499H9.29347V2.13999C9.29347 1.14249 8.75316 0.940613 8.09409 1.68874L3.5994 6.79499C3.05315 7.42436 3.28472 7.93499 4.11597 7.93499Z" />
            </svg>
        ),
    },
]

const NavMenu = ({ closeMenu }: { closeMenu: () => void }) => {
    const location = useLocation()
    const linkStyles = ' rounded-none px-7 '
    const activeLinkStyles = linkStyles + ' !text-secondary !bg-transparent '

    return (
        <ul className="menu gap-2 p-0 text-base-content">
            {menuItems.map((item, index) => (
                <li
                    key={index}
                    className={` ${location.pathname === item.path ? '  before:w-[3.5px] ' : ''} before:content-[" "] before:absolute before:inline-block before:h-[44px] before:bg-primary `}
                >
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? activeLinkStyles : linkStyles
                        }
                        to={item.path}
                        onClick={closeMenu}
                    >
                        {item.svg}
                        <p className=" text-lg sm:hidden lg:block ">
                            {item.name}
                        </p>
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}
export default NavMenu
