import CloseBtn from '../../../../components/ui/CloseBtn'
import { useEffect, useState } from 'react'
interface Props {
    close: () => void
    onSave: () => void
}

const StickyHeader = ({ close, onSave }: Props) => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const modalContent = document.getElementById('modal-content')

        const handleScroll = () => {
            if (!modalContent) return
            if (modalContent.scrollTop > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        modalContent?.addEventListener('scroll', handleScroll)

        return () => {
            modalContent?.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header
            className={`sticky top-0 z-10 flex items-center gap-4 bg-base-300 px-5 py-3 ${
                isScrolled ? 'bg-opacity-70 backdrop-blur-sm' : 'bg-opacity-100'
            } transition duration-300`}
        >
            <div>
                <CloseBtn onClick={close} />
            </div>
            <div className="flex flex-1 items-center justify-between">
                <p className="font-bold text-secondary">Edit Profile</p>
                <button className="btn btn-primary btn-sm" onClick={onSave}>
                    Save
                </button>
            </div>
        </header>
    )
}

export default StickyHeader
