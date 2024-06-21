import { useModal } from '../../../hooks/useModal'
import Modal from '../../../components/ui/Modal'
import { useNavigate } from 'react-router-dom'
import SignupForm from './SignupForm'
import { useState } from 'react'
import { pageRoutes } from '../../../routes'
import ErrorAlert from '../../../components/ui/ErrorAlert'
import CloseBtn from '../../../components/ui/CloseBtn'

const Signup = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    console.log(errorMessage)
    const navigate = useNavigate()
    const { show, close, visible } = useModal(true)
    const closeWithPageShift = () => {
        navigate(pageRoutes.auth)
        close()
    }
    return (
        <Modal close={closeWithPageShift} isOpen={visible}>
            <div
                className={` flex flex-col items-center ${errorMessage ? 'gap-5' : 'gap-10'} `}
            >
                <div className=" flex w-full justify-between">
                    <p className=" text-2xl font-bold text-secondary">
                        Create a new account
                    </p>
                    <CloseBtn onClick={closeWithPageShift} />
                </div>
                <div className=" flex w-full flex-col gap-5">
                    {errorMessage && <ErrorAlert errorMessage={errorMessage} />}
                    <SignupForm setErrorMessage={setErrorMessage} />
                </div>
            </div>
        </Modal>
    )
}

export default Signup
