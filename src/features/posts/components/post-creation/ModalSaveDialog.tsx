import { Path, useNavigate } from 'react-router-dom'
import Modal from '../../../../components/ui/Modal'

interface Props {
    isOpen: boolean
    close: () => void
    save: () => void
}

const ModalSaveDialog = ({ isOpen, close, save }: Props) => {
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
                    <button className=" btn btn-error" onClick={close}>
                        Discard
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default ModalSaveDialog
