import { useNavigate } from 'react-router-dom'
import Modal from '../../../../components/ui/Modal'
import { useModal } from '../../../../hooks/useModal'

interface Props {
    isOpen: boolean
    close: () => void
    save: () => void
}

const ModalSaveDialog = ({ isOpen, close, save }: Props) => {
    const navigate = useNavigate()
    const discard = () => {
        navigate(-1)
    }
    return (
        <Modal isOpen={isOpen} close={close} maxWidth="max-w-sm">
            <div className=" flex flex-col gap-5 ">
                <div>
                    <p className="text-lg font-semibold text-secondary">
                        Save post?
                    </p>
                    <p className=" text-sm">
                        You can save this to send later from your drafts
                    </p>
                </div>
                <div className=" flex flex-col gap-4">
                    <button onClick={save} className=" btn">
                        Save
                    </button>
                    <button className=" btn btn-error" onClick={discard}>
                        Discard
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default ModalSaveDialog
