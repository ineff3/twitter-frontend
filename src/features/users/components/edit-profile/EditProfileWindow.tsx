import StickyHeader from './StickyHeader'
import { useQueryClient } from '@tanstack/react-query'
import useQueryKeyStore from '../../../../utils/api/useQueryKeyStore'
import { IUserDetailResponse } from '../../../../utils/api/interfaces'
import EditProfileForm from './EditProfileForm'
import { useRef } from 'react'
interface Props {
    close: () => void
    username: string
}

const EditProfileWindow = ({ close, username }: Props) => {
    const formRef = useRef<HTMLButtonElement | null>(null)
    const queryClient = useQueryClient()
    const queryKeyStore = useQueryKeyStore()
    const data = queryClient.getQueryData<IUserDetailResponse>(
        queryKeyStore.users.detail(username).queryKey
    )
    const userData = data?.userData

    const triggerFormSubmit = () => {
        if (formRef) {
            formRef.current?.click()
        }
    }

    return (
        <div className=" flex w-full flex-col">
            <StickyHeader close={close} onSave={triggerFormSubmit} />
            {userData && (
                <EditProfileForm user={userData} ref={formRef} close={close} />
            )}
        </div>
    )
}

export default EditProfileWindow
