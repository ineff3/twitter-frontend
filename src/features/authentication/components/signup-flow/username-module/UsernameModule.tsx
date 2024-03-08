import { useState } from 'react'
import GeneratedUsernames from './GeneratedUsernames'
import UsernameInput from './UsernameInput'
import useUpdateUsername from '../../../hooks/useUpdateUsername'

interface Props {
    initialUsername: string | undefined
}
const UsernameModule = ({ initialUsername }: Props) => {
    const [username, setUsername] = useState(initialUsername || 'username123')
    const [isReserved, setIsReserved] = useState(false)
    const [isValid, setIsValid] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const updateUsernameMutation = useUpdateUsername()

    const onSubmit = () => {
        updateUsernameMutation.mutate({ username: username })
    }

    return (
        <>
            <div className=" mb-7 self-center ">
                <svg
                    width="21"
                    height="20"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5.20002 0.0749817H0.212524L6.09777 7.92246L0.533149 14.325H2.42127L6.97272 9.08882L10.9 14.325H15.8875L9.75432 6.14691L15.0325 0.0749817H13.1444L8.87937 4.98126L5.20002 0.0749817ZM11.6125 12.9L3.06252 1.49998H4.48752L13.0375 12.9H11.6125Z"
                        fill="white"
                    />
                </svg>
            </div>
            <div className=" flex flex-1 flex-col gap-5">
                <div>
                    <p className=" text-2xl font-bold text-secondary">
                        What should we call you?
                    </p>
                    <p className=" text-[12px]">
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
