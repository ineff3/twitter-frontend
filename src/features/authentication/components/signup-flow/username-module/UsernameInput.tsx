import { useEffect, useState } from 'react'
import useCheckUsername from '../../../hooks/useCheckUsername'

interface Props {
    username: string
    initialUsername: string | undefined
    setUsername: (value: string) => void
    isReserved: boolean
    setIsReserved: (value: boolean) => void
    isValid: boolean
    setIsValid: (value: boolean) => void
    isLoading: boolean
    setIsLoading: (value: boolean) => void
}

const UsernameInput = ({
    username,
    initialUsername,
    setUsername,
    isReserved,
    setIsReserved,
    isValid,
    setIsValid,
    isLoading,
    setIsLoading,
}: Props) => {
    const [debounced, setDebounced] = useState('')

    const checkUsernameMutation = useCheckUsername()

    useEffect(() => {
        if (username.length <= 4) {
            setIsValid(false)
        } else {
            setIsValid(true)
            if (username != initialUsername) {
                setIsLoading(true)
                const timeout = setTimeout(() => {
                    setDebounced(username)
                }, 1500)

                return () => {
                    clearTimeout(timeout)
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [username])

    useEffect(() => {
        if (username && username != initialUsername) {
            checkUsernameMutation.mutate(
                { username: debounced },
                {
                    onSuccess(response) {
                        setIsReserved(response.isReserved)
                    },
                    onSettled() {
                        setIsLoading(false)
                    },
                }
            )
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounced])

    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text text-secondary">
                    Enter a username:
                </span>
            </div>
            <label className="input input-primary flex items-center gap-2">
                <span className=" text-primary">@</span>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.currentTarget.value)}
                    className=" flex flex-1"
                />
                {isLoading ? (
                    <span className="loading loading-spinner loading-md"></span>
                ) : isReserved ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="3 3 16 16"
                        width="27"
                        height="27"
                    >
                        <circle
                            cx="11"
                            cy="-1041.36"
                            r="8"
                            transform="matrix(1 0 0-1 0-1030.36)"
                            opacity=".98"
                            fill="#da4453"
                        />
                        <path
                            d="m-26.309 18.07c-1.18 0-2.135.968-2.135 2.129v12.82c0 1.176.948 2.129 2.135 2.129 1.183 0 2.135-.968 2.135-2.129v-12.82c0-1.176-.946-2.129-2.135-2.129zm0 21.348c-1.18 0-2.135.954-2.135 2.135 0 1.18.954 2.135 2.135 2.135 1.181 0 2.135-.954 2.135-2.135 0-1.18-.952-2.135-2.135-2.135z"
                            transform="matrix(.30056 0 0 .30056 18.902 1.728)"
                            fill="#fff"
                            stroke="#fff"
                        />
                    </svg>
                ) : (
                    <img
                        className=" w-[27px]"
                        src="./correct.png"
                        alt="correct"
                    />
                )}
            </label>
            {!isValid && (
                <div className="label">
                    <span className="label-text-alt text-error">
                        Username should have at least 5 characters
                    </span>
                </div>
            )}
        </label>
    )
}

export default UsernameInput
