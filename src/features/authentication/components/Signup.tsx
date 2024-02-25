import { useModal } from '../../../hooks/handleView'
import Modal from '../../../components/ui/Modal'
import { useNavigate } from 'react-router-dom'
import SignupForm from './SignupForm'

const Signup = () => {
    const navigate = useNavigate()
    const { show, close, visible } = useModal(true)
    const closeWithPageShift = () => {
        navigate('/auth')
        close()
    }
    return (
        <Modal close={closeWithPageShift} isOpen={visible}>
            <div className=" flex flex-col items-center gap-10">
                <div className=" flex w-full justify-between">
                    <p className=" text-2xl font-bold text-secondary">
                        Create a new account
                    </p>
                    <button
                        onClick={closeWithPageShift}
                        className="btn btn-circle btn-ghost btn-sm"
                    >
                        ✕
                    </button>
                </div>
                <SignupForm />
            </div>
        </Modal>
    )
}

export default Signup
