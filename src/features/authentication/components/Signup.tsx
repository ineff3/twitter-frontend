import { useModal } from '../../../hooks/useModal'
import Modal from '../../../components/ui/Modal'
import { useNavigate } from 'react-router-dom'
import SignupForm from './SignupForm'
import { useState } from 'react'
import { pageRoutes } from '../../../routes'

const Signup = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
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
                    <button
                        onClick={closeWithPageShift}
                        className="btn btn-circle btn-ghost btn-sm"
                    >
                        ✕
                    </button>
                </div>
                <div className=" flex flex-col gap-5">
                    {errorMessage && (
                        <div
                            role="alert"
                            className="alert alert-error rounded-none py-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 shrink-0 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>{errorMessage}</span>
                        </div>
                    )}
                    <SignupForm setErrorMessage={setErrorMessage} />
                </div>
            </div>
        </Modal>
    )
}

export default Signup
