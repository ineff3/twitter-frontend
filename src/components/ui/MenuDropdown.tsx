import { Menu, MenuButton, Transition } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'

interface Props {
    btnContent: ReactNode
    children: ReactNode
}
const MenuDropdown = ({ btnContent, children }: Props) => {
    return (
        <div className="relative text-right">
            <Menu>
                <MenuButton>{btnContent}</MenuButton>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-75"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {children}
                </Transition>
            </Menu>
        </div>
    )
}

export default MenuDropdown
