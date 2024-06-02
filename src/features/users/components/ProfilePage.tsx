import { Link, useParams } from 'react-router-dom'
import useFetchUserProfile from '../hooks/useFetchUserProfile'
import ProfileNotFound from './ProfileNotFound'
import { pageRoutes } from '../../../routes'
import { Tab } from '@headlessui/react'
import DescriptionPoints from './DescriptionPoints'
import { useModal } from '../../../hooks/useModal'
import Modal from '../../../components/ui/Modal'
import EditProfileWindow from './edit-profile/EditProfileWindow'
import { FaUserCircle } from 'react-icons/fa'

const ProfilePage = () => {
    const { username } = useParams()
    const { data, isPending, isError } = useFetchUserProfile(username!)
    const { show, close, visible } = useModal()

    if (isPending) {
        return (
            <div className=" mt-12 flex justify-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }

    if (isError) {
        return <ProfileNotFound />
    }

    const userData = data.userData

    const imgURL = new URL(
        userData?.userImage,
        import.meta.env.VITE_API_BASE_URL
    )

    return (
        <div className=" flex h-full flex-col">
            <header className=" flex items-center justify-start gap-4 border-b border-accent px-10 py-1.5">
                <Link
                    to={pageRoutes.home}
                    className=" btn btn-circle btn-ghost btn-sm text-secondary"
                >
                    <svg
                        width="23"
                        height="15"
                        viewBox="0 0 21 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.292892 7.2929C-0.0976315 7.68342 -0.0976314 8.31658 0.292893 8.70711L6.65686 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928933C7.68054 0.538409 7.04738 0.538409 6.65685 0.928933L0.292892 7.2929ZM21 7L1 7L1 9L21 9L21 7Z"
                            fill="currentColor"
                        />
                    </svg>
                </Link>

                <div className=" flex flex-col">
                    <p className=" font-bold text-secondary">
                        {userData.firstName} {userData.secondName}
                    </p>
                    <p className=" text-[12px]">1,070 Tweets</p>
                </div>
            </header>
            <div className=" h-[200px] bg-base-200">
                {userData?.backgroundImage && (
                    <img
                        src={
                            new URL(
                                userData?.backgroundImage,
                                import.meta.env.VITE_API_BASE_URL
                            ).href
                        }
                        alt="Background Image"
                        className=" h-full w-full object-cover"
                    />
                )}
            </div>

            <div className=" relative -top-[70px] mx-auto flex w-full max-w-screen-md flex-col gap-2">
                <div className=" px-10">
                    <div className=" flex h-[140px] items-center justify-between">
                        <div className=" h-[110px] w-[110px] overflow-hidden rounded-full">
                            {userData?.userImage ? (
                                <img
                                    src={String(imgURL)}
                                    alt="Profile Image"
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <FaUserCircle size={110} />
                            )}
                        </div>
                        {data.isCurrentUser && (
                            <div className=" self-end">
                                <button
                                    className=" btn btn-outline btn-md"
                                    onClick={show}
                                >
                                    Edit profile
                                </button>
                                <Modal
                                    isOpen={visible}
                                    close={close}
                                    hasPadding={false}
                                    maxWidth="max-w-lg"
                                >
                                    <EditProfileWindow
                                        close={close}
                                        username={userData?.username}
                                    />
                                </Modal>
                            </div>
                        )}
                    </div>

                    <div className=" flex flex-col gap-4">
                        <div className=" flex flex-col">
                            <p className=" font-bold text-secondary">
                                {userData.firstName}
                            </p>
                            <p className=" text-[12px]">@{userData.username}</p>
                        </div>
                        {userData?.bio && (
                            <p className=" text-sm text-secondary">
                                {userData.bio}
                            </p>
                        )}
                        <div>
                            <DescriptionPoints userData={userData} />
                        </div>
                    </div>
                </div>
                <div className=" mt-4">
                    <ProfileTabs />
                </div>
            </div>
        </div>
    )
}

export default ProfilePage

const tabItems = [
    {
        name: 'Tweets',
    },
    {
        name: 'Tweets & replies',
    },
    {
        name: 'Media',
    },
    {
        name: 'Likes',
    },
]

const ProfileTabs = () => {
    return (
        <Tab.Group>
            <Tab.List className=" flex border-b border-accent">
                {tabItems.map((item, index) => (
                    <Tab
                        key={index}
                        className=" flex w-1/2 items-center justify-center transition-all duration-150 ease-in-out hover:bg-base-300 "
                    >
                        {({ selected }) => (
                            <div
                                className={`  box-border border-b-[3.5px] border-primary px-3 py-3.5 text-sm ${selected ? 'text-secondary' : ' border-none'}`}
                            >
                                {item.name}
                            </div>
                        )}
                    </Tab>
                ))}
            </Tab.List>
            <Tab.Panels>
                <Tab.Panel>Content 1</Tab.Panel>
                <Tab.Panel>Content 2</Tab.Panel>
                <Tab.Panel>Content 3</Tab.Panel>
                <Tab.Panel>Content 4</Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    )
}
