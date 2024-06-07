import PhotoForm from './PhotoForm'

const ProfilePhotoModule = () => {
    return (
        <div className=" flex flex-1 flex-col gap-12">
            <div>
                <p className=" text-2xl font-bold text-secondary">
                    Pick a profile picture
                </p>
                <p className=" text-sm">
                    Have a favourite selfie? Upload it now
                </p>
            </div>
            <PhotoForm />
        </div>
    )
}

export default ProfilePhotoModule
