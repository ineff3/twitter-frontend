import { useModal } from '../../../hooks/handleView'
import Modal from '../../../components/ui/Modal'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate()
    const { show, close, visible } = useModal(true)
    const closeWithPageShift = () => {
        navigate('/auth')
        close()
    }
    return (
        <Modal close={closeWithPageShift} isOpen={visible}>
            Abobus
        </Modal>
    )
}

export default Signup
