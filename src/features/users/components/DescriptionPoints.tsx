import { format, parseISO } from 'date-fns'
import BornIconSvg from '../../../components/ui/icons/BornIconSvg'
import CalendarIconSvg from '../../../components/ui/icons/CalendarIconSvg'
import LinkIconSvg from '../../../components/ui/icons/LinkIconSvg'
import LocationIconSvg from '../../../components/ui/icons/LocationIconSvg'
import { IUser } from '../../authentication/interfaces'

const DescriptionPoints = ({ userData }: { userData: IUser }) => {
    const allPointsExist =
        userData?.location &&
        userData?.link &&
        userData?.createdAt &&
        userData?.bornDate

    return (
        <div
            className={` flex flex-wrap ${allPointsExist ? 'justify-between' : ' gap-2 sm:gap-4'} text-sm `}
        >
            {userData?.location && (
                <div className=" flex items-center gap-2">
                    <LocationIconSvg
                        width={20}
                        height={20}
                        fill="currentColor"
                    />
                    <p>{userData.location}</p>
                </div>
            )}
            {userData?.link && (
                <div className=" flex items-center gap-2">
                    <LinkIconSvg width={20} height={20} fill="currentColor" />
                    <a
                        target="_blank"
                        href={userData.link}
                        className=" link link-primary"
                    >
                        {userData.link}
                    </a>
                </div>
            )}
            {userData?.bornDate && (
                <div className=" flex items-center gap-2">
                    <BornIconSvg width={20} height={20} fill="currentColor" />
                    <p>
                        Born{' '}
                        {format(parseISO(userData?.bornDate), 'MMMM dd, yyyy')}
                    </p>
                </div>
            )}
            {userData?.createdAt && (
                <div className=" flex items-center gap-2">
                    <CalendarIconSvg
                        width={20}
                        height={20}
                        fill="currentColor"
                    />
                    <p>
                        Joined{' '}
                        {format(parseISO(userData?.createdAt), 'MMMM dd, yyyy')}
                    </p>
                </div>
            )}
        </div>
    )
}

export default DescriptionPoints
