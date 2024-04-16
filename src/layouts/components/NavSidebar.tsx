import Modal from '../../components/ui/Modal'
import { CreatePostForm } from '../../features/posts'
import { useModal } from '../../hooks/useModal'
import NavMenu from './NavMenu'
import UserPreview from './UserPreview'

const NavSidebar = () => {
    const { show, close, visible } = useModal()
    return (
        <>
            <div className=" fixed h-full w-[220px] border-r border-accent">
                <div className=" flex h-full flex-col pb-6 pt-3 ">
                    <div className=" flex flex-1 flex-col">
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
                    <div className=" px-4">
                        <div className=" mb-5 flex justify-center">
                            <button
                                onClick={show}
                                className=" btn btn-primary h-fit min-h-0 rounded-2xl px-16 py-3"
                            >
                                Post
                            </button>
                        </div>
                        <UserPreview />
                    </div>
                </div>
            </div>
            <Modal isOpen={visible} close={close} staticMode>
                <CreatePostForm close={close} />
            </Modal>
        </>
    )
}
export default NavSidebar
