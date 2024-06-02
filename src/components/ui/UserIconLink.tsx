import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

interface Props {
    username?: string
    userImage?: string
}

const UserIconLink = ({ username, userImage }: Props) => {
    const imgURL = new URL(userImage || '', import.meta.env.VITE_API_BASE_URL)
    return (
        <>
            {userImage ? (
                <Link
                    to={'/' + username || ''}
                    className=" h-[37px] w-[37px] flex-shrink-0 overflow-hidden rounded-full"
                >
                    <img
                        src={String(imgURL)}
                        alt="Profile image"
                        className="h-full w-full object-cover"
                    />
                </Link>
            ) : (
                <FaUserCircle size={37} />
            )}
        </>
    )
}

export default UserIconLink
