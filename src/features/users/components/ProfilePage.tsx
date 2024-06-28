import { Link, useParams } from 'react-router-dom'
import useFetchUserProfile from '../hooks/useFetchUserProfile'
import ProfileNotFound from './ProfileNotFound'
import { pageRoutes } from '../../../routes'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import DescriptionPoints from './DescriptionPoints'
import { useModal } from '../../../hooks/useModal'
import Modal from '../../../components/ui/Modal'
import EditProfileWindow from './edit-profile/EditProfileWindow'
import { FaUserCircle } from 'react-icons/fa'
import UserTweetsFlow from './profile-tabs-content/UserTweetsFlow'
import UserLikedPostsFlow from './profile-tabs-content/UserLikedPostsFlow'
import ArrowIconSvg from '../../../components/ui/icons/ArrowIconSvg'

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

    return (
        <div className=" flex h-full flex-col">
            <header className=" flex items-center justify-start gap-4 border-b border-accent px-10 py-1.5">
                <Link
                    to={pageRoutes.home}
                    className=" btn btn-circle btn-ghost btn-sm text-secondary"
                >
                    <ArrowIconSvg width={18} height={18} fill="currentColor" />
                </Link>

                <div className=" flex flex-col">
                    <p className=" font-bold text-secondary">
                        {userData.firstName} {userData.secondName}
                    </p>
                    <p className=" text-sm">1,070 Tweets</p>
                </div>
            </header>
            <div className=" h-[250px] bg-base-200">
                {userData?.backgroundImageUrl && (
                    <img
                        src={userData?.backgroundImageUrl}
                        alt="Background Image"
                        className=" h-full w-full object-cover"
                    />
                )}
            </div>

            <div className=" relative -top-[70px] mx-auto flex w-full max-w-screen-md flex-col gap-2">
                <div className=" px-10">
                    <div className=" flex h-[140px] items-center justify-between">
                        <div className=" h-[110px] w-[110px] overflow-hidden rounded-full bg-base-100">
                            {userData?.userImageUrl ? (
                                <img
                                    src={userData?.userImageUrl}
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
                            <p className=" text-sm">@{userData.username}</p>
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
                    <ProfileTabs userId={userData._id} />
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

const ProfileTabs = ({ userId }: { userId: string }) => {
    return (
        <TabGroup>
            <TabList className=" flex border-b border-accent">
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
            </TabList>
            <TabPanels>
                <TabPanel>
                    <UserTweetsFlow userId={userId} />
                </TabPanel>
                <TabPanel>Content 2</TabPanel>
                <TabPanel>Content 3</TabPanel>
                <TabPanel>
                    <UserLikedPostsFlow />
                </TabPanel>
            </TabPanels>
        </TabGroup>
    )
}
