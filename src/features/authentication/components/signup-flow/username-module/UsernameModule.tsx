import { useState } from 'react'
import GeneratedUsernames from './GeneratedUsernames'
import UsernameInput from './UsernameInput'
import useUpdateUsername from '../../../hooks/useUpdateUsername'
import { useQueryClient } from '@tanstack/react-query'
import { IUserPreview } from '../../../interfaces'
import useQueryKeyStore from '../../../../../utils/api/useQueryKeyStore'

interface Props {
    next: () => void
}
const UsernameModule = ({ next }: Props) => {
    const queryClient = useQueryClient()
    const queryKeyStore = useQueryKeyStore()
    const initialUsername = queryClient.getQueryData<IUserPreview>(
        queryKeyStore.users.currentUserPreview.queryKey
    )?.username
    const [username, setUsername] = useState(initialUsername || 'username123')
    const [isReserved, setIsReserved] = useState(false)
    const [isValid, setIsValid] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const updateUsernameMutation = useUpdateUsername()

    const onSubmit = () => {
        if (username !== initialUsername) {
            updateUsernameMutation.mutate({
                newValue: username.trim(),
                updateType: 'username',
            })
        }
        next()
    }

    return (
        <>
            <div className=" flex flex-1 flex-col gap-5">
                <div>
                    <p className=" text-2xl font-bold text-secondary">
                        What should we call you?
                    </p>
                    <p className=" text-sm">
                        Your @username is unique. You can always change it
                        later.
                    </p>
                </div>

                <UsernameInput
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    isValid={isValid}
                    setIsValid={setIsValid}
                    initialUsername={initialUsername}
                    isReserved={isReserved}
                    setIsReserved={setIsReserved}
                    username={username}
                    setUsername={setUsername}
                />
                <GeneratedUsernames setUsername={setUsername} />
            </div>
            <button
                onClick={onSubmit}
                className={`btn ${(!isValid || isLoading) && ' btn-disabled !bg-base-200'} ${username === initialUsername ? ' btn-accent' : 'btn-primary'}`}
            >
                {username === initialUsername ? <>Skip for now</> : <>Next</>}
            </button>
        </>
    )
}

export default UsernameModule
