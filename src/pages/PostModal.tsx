import { Outlet, useNavigate, useOutlet } from 'react-router-dom'
import Modal from '../components/ui/Modal'
import { CreatePostForm, ModalSaveDialog } from '../features/posts'
import { useModal } from '../hooks/useModal'
import { useRef, useState } from 'react'

const PostModal = () => {
    const saveDraftRef = useRef<HTMLButtonElement | null>(null)
    const [isFormDirty, setIsFormDirty] = useState(false)
    const [saveDialogOpen, setSaveDialogOpen] = useState(false)
    const { visible } = useModal(true)
    const navigate = useNavigate()
    const closeModal = () => {
        if (isFormDirty) {
            setSaveDialogOpen(true)
        } else {
            navigate(-1)
        }
    }
    const closeModalSaveDialog = () => {
        setSaveDialogOpen(false)
    }
    const saveDraft = () => {
        if (saveDraftRef.current) {
            saveDraftRef.current.click()
        }
    }
    const hasOutlet = useOutlet()

    return (
        <Modal isOpen={visible} close={closeModal}>
            {!hasOutlet && (
                <CreatePostForm
                    setIsFormDirty={setIsFormDirty}
                    closeModal={closeModal}
                    ref={saveDraftRef}
                />
            )}
            <Outlet />
            <ModalSaveDialog
                save={saveDraft}
                isOpen={saveDialogOpen}
                close={closeModalSaveDialog}
            />
        </Modal>
    )
}

export default PostModal
