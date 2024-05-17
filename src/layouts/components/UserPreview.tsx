import { FaUserCircle } from 'react-icons/fa'
import { SlOptions } from 'react-icons/sl'
import MenuDropdown from '../../components/ui/MenuDropdown'
import { Menu } from '@headlessui/react'
import { IoSettingsOutline } from 'react-icons/io5'
import { PiSignOut } from 'react-icons/pi'
import { forwardRef } from 'react'
import { useLogout } from '../../features/authentication'
import { Link, useNavigate } from 'react-router-dom'
import { apiRoutes, pageRoutes } from '../../routes'
import { IUser } from '../../features/authentication/interfaces'
import { useFetch } from '../../utils/api/queries'
import { useQueryClient } from '@tanstack/react-query'
import UserIconLink from '../../components/ui/UserIconLink'

const UserPreview = () => {
    const user = useFetch<IUser>(apiRoutes.getAuthorizedUser, null, {
        staleTime: Infinity,
        gcTime: Infinity,
    })
    let imgURL = undefined
    if (user?.data?.userImage) {
        imgURL = new URL(
            user?.data?.userImage,
            import.meta.env.VITE_API_BASE_URL
        )
    }

    return (
        <div className=" flex items-center gap-2">
            {imgURL ? (
                <UserIconLink
                    username={user?.data?.username}
                    userImage={user?.data?.userImage}
                />
            ) : (
                <>
                    <FaUserCircle size={37} />
                </>
            )}
            <div className=" flex w-full items-center justify-between">
                <div className=" flex flex-col">
                    <p className=" text-sm text-secondary">
                        {user?.data?.firstName}
                    </p>
                    <p className=" text-[12px]">@{user?.data?.username}</p>
                </div>
                <MenuDropdown
                    btnContent={
                        <div className=" btn btn-circle btn-ghost btn-sm">
                            <SlOptions />
                        </div>
                    }
                >
                    <MenuDropdownContent />
                </MenuDropdown>
            </div>
        </div>
    )
}

export default UserPreview

const MenuDropdownContent = forwardRef((_, ref: any) => {
    const logout = useLogout()
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const user: IUser | undefined = queryClient.getQueryData([
        apiRoutes.getAuthorizedUser,
    ])
    const signOut = async () => {
        await logout()
        navigate(pageRoutes.auth)
    }
    return (
        <Menu.Items
            ref={ref}
            className="absolute -right-12 bottom-[50px] flex  w-[240px] origin-bottom-right flex-col overflow-hidden rounded-xl bg-base-200 shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
            <Menu.Item>
                {({ active }) => (
                    <Link
                        to={import.meta.env.VITE_API_BASE_URL + user?.username}
                        className={`${
                            active ? 'bg-neutral text-neutral-content' : ''
                        } flex items-center gap-4 px-4 py-2`}
                    >
                        <IoSettingsOutline size={17} />
                        <p>Manage Account</p>
                    </Link>
                )}
            </Menu.Item>
            <Menu.Item>
                {({ active }) => (
                    <button
                        onClick={signOut}
                        className={`${
                            active ? 'bg-neutral text-neutral-content' : ''
                        } flex items-center gap-4 px-4 py-2`}
                    >
                        <PiSignOut size={17} />
                        <p>Log out</p>
                    </button>
                )}
            </Menu.Item>
        </Menu.Items>
    )
})
