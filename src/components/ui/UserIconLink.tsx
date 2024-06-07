import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

interface Props {
    username?: string
    userImage?: string
    onClick?: () => void
}

const UserIconLink = ({ username, userImage, onClick }: Props) => {
    const imgURL = new URL(userImage || '', import.meta.env.VITE_API_BASE_URL)
    return (
        <>
            <Link
                to={'/users/' + username || ''}
                className=" h-[45px] w-[45px] flex-shrink-0 overflow-hidden rounded-full"
                onClick={onClick}
            >
                {userImage ? (
                    <img
                        src={String(imgURL)}
                        alt="Profile image"
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <FaUserCircle size={45} />
                )}
            </Link>
        </>
    )
}

export default UserIconLink
