import { Menu, Transition } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'

interface Props {
    btnContent: ReactNode
    children: ReactNode
}
const MenuDropdown = ({ btnContent, children }: Props) => {
    return (
        <Menu as="div" className="relative flex items-center text-left">
            <Menu.Button>{btnContent}</Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                {children}
            </Transition>
        </Menu>
    )
}

export default MenuDropdown
