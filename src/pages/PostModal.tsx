import { useNavigate } from 'react-router-dom'
import Modal from '../components/ui/Modal'
import { CreatePostForm } from '../features/posts'
import { useModal } from '../hooks/useModal'

const PostModal = () => {
    const { visible } = useModal(true)
    const navigate = useNavigate()
    const closeModal = () => {
        navigate(-1)
    }

    return (
        <Modal isOpen={visible} close={closeModal} staticMode>
            <CreatePostForm close={closeModal} />
        </Modal>
    )
}

export default PostModal
