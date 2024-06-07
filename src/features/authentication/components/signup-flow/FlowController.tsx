import { useModal } from '../../../../hooks/useModal'
import Modal from '../../../../components/ui/Modal'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { pageRoutes } from '../../../../routes'
import usePagination from '../../../../hooks/usePagination'
import UsernameModule from './username-module/UsernameModule'
import ProfilePhotoModule from './profile-photo-module/ProfilePhotoModule'

const FlowController = () => {
    const { page, nextPage } = usePagination()
    const location = useLocation()
    const { show, close, visible } = useModal(true)
    const navigate = useNavigate()
    const from = location.state?.from?.pathname

    const modalClose = () => {
        close()
        navigate(pageRoutes.home)
    }

    return (
        <>
            {from === pageRoutes.authSignup ? (
                <Modal
                    isOpen={visible}
                    close={modalClose}
                    staticMode
                    maxWidth="max-w-md"
                >
                    <div className=" flex min-h-[430px] flex-col ">
                        <div className=" mb-7 self-center ">
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
                        </div>
                        {page === 1 && <UsernameModule next={nextPage} />}
                        {page === 2 && <ProfilePhotoModule />}
                    </div>
                </Modal>
            ) : (
                <Navigate to={pageRoutes.home} />
            )}
        </>

        // <>
        //     <Modal isOpen={visible} close={modalClose} staticMode>
        //         <div className=" flex min-h-[430px] flex-col ">
        //             <div className=" mb-7 self-center ">
        //                 <svg
        //                     width="21"
        //                     height="20"
        //                     viewBox="0 0 16 15"
        //                     fill="none"
        //                     xmlns="http://www.w3.org/2000/svg"
        //                 >
        //                     <path
        //                         d="M5.20002 0.0749817H0.212524L6.09777 7.92246L0.533149 14.325H2.42127L6.97272 9.08882L10.9 14.325H15.8875L9.75432 6.14691L15.0325 0.0749817H13.1444L8.87937 4.98126L5.20002 0.0749817ZM11.6125 12.9L3.06252 1.49998H4.48752L13.0375 12.9H11.6125Z"
        //                         fill="white"
        //                     />
        //                 </svg>
        //             </div>
        //             {page === 1 && <UsernameModule next={nextPage} />}
        //             {page === 2 && <ProfilePhotoModule />}
        //         </div>
        //     </Modal>
        // </>
    )
}

export default FlowController
