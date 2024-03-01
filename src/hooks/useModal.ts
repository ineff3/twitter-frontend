import { useState } from 'react'

export const useModal = (initialState?: boolean) => {
    const [isOpen, setIsOpen] = useState(
        initialState === undefined ? false : initialState
    )
    const visible = isOpen

    const show = () => {
        setIsOpen(true)
    }

    const close = () => {
        setIsOpen(false)
    }

    return { show, close, visible }
}
