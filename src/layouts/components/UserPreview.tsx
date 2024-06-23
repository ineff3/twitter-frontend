import { SlOptions } from 'react-icons/sl'
import MenuDropdown from '../../components/ui/MenuDropdown'
import { MenuItem, MenuItems } from '@headlessui/react'
import { IoSettingsOutline } from 'react-icons/io5'
import { PiSignOut } from 'react-icons/pi'
import { forwardRef } from 'react'
import { useLogout } from '../../features/authentication'
import { Link, useNavigate } from 'react-router-dom'
import { pageRoutes } from '../../routes'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import UserIconLink from '../../components/ui/UserIconLink'
import useQueryKeyStore from '../../utils/api/useQueryKeyStore'
import { IUserPreview } from '../../features/authentication/interfaces'

const UserPreview = ({ closeMenu }: { closeMenu: () => void }) => {
    const queryKeyStore = useQueryKeyStore()
    const user = useQuery({
        ...queryKeyStore.users.currentUserPreview,
        staleTime: Infinity,
        gcTime: Infinity,
    })

    return (
        <div className=" flex items-center gap-2 sm:flex-col lg:flex-row">
            <UserIconLink
                onClick={closeMenu}
                userImageUrl={user?.data?.userImageUrl}
                username={user?.data?.username}
            />
            <div className=" flex w-full items-center justify-between sm:justify-center lg:justify-between ">
                <div className=" flex flex-col sm:hidden lg:flex">
                    <p className=" text-secondary">{user?.data?.firstName}</p>
                    <p className=" text-sm ">@{user?.data?.username}</p>
                </div>
                <MenuDropdown
                    btnContent={
                        <div className=" btn btn-circle btn-ghost btn-md">
                            <SlOptions size={18} />
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
    const queryKeyStore = useQueryKeyStore()
    const user: IUserPreview | undefined = queryClient.getQueryData(
        queryKeyStore.users.currentUserPreview.queryKey
    )
    const signOut = async () => {
        await logout()
        navigate(pageRoutes.auth)
    }
    return (
        <MenuItems
            anchor="top end"
            ref={ref}
            className=" absolute z-[60] flex w-[240px] origin-bottom-right flex-col overflow-hidden rounded-xl bg-base-200 shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
            <MenuItem>
                <Link
                    to={'/users/' + (user?.username || '')}
                    className={` flex items-center gap-4 px-6 py-3 data-[focus]:bg-neutral data-[focus]:text-secondary`}
                >
                    <IoSettingsOutline size={17} />
                    <p>Manage Account</p>
                </Link>
            </MenuItem>
            <MenuItem>
                <button
                    onClick={signOut}
                    className={` flex items-center gap-4 px-6 py-3 data-[focus]:bg-neutral data-[focus]:text-secondary`}
                >
                    <PiSignOut size={17} />
                    <p>Log out</p>
                </button>
            </MenuItem>
        </MenuItems>
    )
})
