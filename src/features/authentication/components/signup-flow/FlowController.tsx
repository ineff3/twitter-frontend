import { useModal } from '../../../../hooks/useModal'
import Modal from '../../../../components/ui/Modal'
import { useLocation, useNavigate } from 'react-router-dom'
import { pageRoutes } from '../../../../routes'
import UserDataWrapper from './username-module/UserDataWrapper'

const FlowController = () => {
    const location = useLocation()
    const { show, close, visible } = useModal(true)
    const navigate = useNavigate()

    const from = location.state?.from?.pathname
    const modalClose = () => {
        close()
        navigate(pageRoutes.home)
    }

    return (
        // <>
        //     {from === pageRoutes.authSignup ? (
        //         <Modal isOpen={visible} close={modalClose}>
        //             Aboba
        //         </Modal>
        //     ) : (
        //         <Navigate to={pageRoutes.home} />
        //     )}
        // </>

        <>
            <Modal isOpen={visible} close={modalClose}>
                <div className=" flex min-h-[400px] flex-col ">
                    <UserDataWrapper />
                </div>
            </Modal>
        </>
    )
}

export default FlowController
