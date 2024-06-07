import { useUsernames } from '../../..'

interface Props {
    setUsername: (value: string) => void
}

const GeneratedUsernames = ({ setUsername }: Props) => {
    const { data, status } = useUsernames()

    if (status === 'pending') {
        return (
            <div className=" flex justify-center">
                <span className="loading loading-spinner loading-md"></span>
            </div>
        )
    }
    if (!data || status === 'error') {
        return <></>
    }

    return (
        <div className=" flex flex-wrap gap-1 text-sm text-primary">
            {data.usernames.map((name, index) => (
                <span
                    className=" cursor-pointer"
                    onClick={() => setUsername(name)}
                    key={index}
                >
                    @{name},
                </span>
            ))}
        </div>
    )
}

export default GeneratedUsernames
