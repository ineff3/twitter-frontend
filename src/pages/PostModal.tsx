import { Outlet, useNavigate, useOutlet } from 'react-router-dom'
import Modal from '../components/ui/Modal'
import { CreatePostForm, ModalSaveDialog } from '../features/posts'
import { useModal } from '../hooks/useModal'
import { useRef, useState } from 'react'
import {
    PostProvider,
    usePostContext,
} from '../features/posts/contexts/PostContext'

const ContextWrapper = () => {
    return (
        <PostProvider>
            <PostModal />
        </PostProvider>
    )
}

const PostModal = () => {
    const { isDirty, saveToDraft } = usePostContext()!
    const [saveDialogOpen, setSaveDialogOpen] = useState(false)
    const { visible } = useModal(true)
    const navigate = useNavigate()
    const closeModal = () => {
        if (isDirty) {
            setSaveDialogOpen(true)
        } else {
            navigate(-1)
        }
    }

    const hasOutlet = useOutlet()

    return (
        <Modal isOpen={visible} close={closeModal}>
            {!hasOutlet && <CreatePostForm closeModal={closeModal} />}
            <Outlet />
            <ModalSaveDialog
                save={() => {
                    saveToDraft()
                    navigate(-1)
                }}
                isOpen={saveDialogOpen}
                close={() => {
                    setSaveDialogOpen(false)
                    navigate(-1)
                }}
            />
        </Modal>
    )
}

export default ContextWrapper
