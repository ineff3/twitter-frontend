import UserIconLink from '../../../components/ui/UserIconLink'
import { useQueryClient } from '@tanstack/react-query'
import { IUserPreview } from '../../authentication/interfaces'
import { GifIcon, ScheduleIcon, StatsIcon } from '../../../components/ui/icons'
import AttachPicture from './post-creation/AttachPicture'
import AttachedPictures from './post-creation/AttachedPictures'
import AttachEmoji from './post-creation/AttachEmoji'
import useQueryKeyStore from '../../../utils/api/useQueryKeyStore'
import CloseBtn from '../../../components/ui/CloseBtn'
import ErrorAlert from '../../../components/ui/ErrorAlert'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { pageRoutes } from '../../../routes'
import {
    ACCEPTED_IMAGE_TYPES,
    MAX_IMAGES_PER_POST,
} from '../schemas/createPostSchema'
import { usePostContext } from '../contexts/PostContext'
import ModalSaveDialog from './post-creation/ModalSaveDialog'
import { useModal } from '../../../hooks/useModal'

interface IProps {
    closeModal: () => void
}

const CreatePostForm = ({ closeModal }: IProps) => {
    const {
        creationError,
        submitForm,
        register,
        errors,
        appendEmoji,
        postImages,
        appendPostImage,
        removePostImage,
        postIsPending,
        isDirty,
        saveToDraft,
    } = usePostContext()!

    const location = useLocation()
    const queryClient = useQueryClient()
    const queryKeyStore = useQueryKeyStore()
    const user: IUserPreview | undefined = queryClient.getQueryData(
        queryKeyStore.users.currentUserPreview.queryKey
    )
    const { visible, show } = useModal()
    const navigate = useNavigate()
    const navigateToDrafts = () => {
        navigate(pageRoutes.drafts, {
            state: {
                backgroundLocation: location.state?.backgroundLocation,
            },
        })
    }

    return (
        <>
            <ModalSaveDialog
                isOpen={visible}
                save={() => {
                    saveToDraft()
                    navigateToDrafts()
                }}
                close={() => navigateToDrafts()}
            />
            <form
                onSubmit={submitForm}
                className=" flex min-h-[350px] flex-col "
            >
                <div className=" mb-5 flex items-center justify-between">
                    <CloseBtn onClick={closeModal} />
                    <button
                        onClick={() => {
                            if (isDirty) {
                                show()
                            } else {
                                navigateToDrafts()
                            }
                        }}
                        type="button"
                        className=" btn btn-ghost text-base text-primary"
                    >
                        Drafts
                    </button>
                </div>

                <div className="flex flex-1 gap-2 px-1.5">
                    <UserIconLink
                        userImageUrl={user?.userImageUrl}
                        username={user?.username}
                    />
                    <div className=" flex w-full flex-col gap-5">
                        <label className=" form-control">
                            <textarea
                                {...register('text')}
                                className="textarea textarea-bordered max-h-[200px]  w-full  resize-none text-base"
                                placeholder="What is happening?"
                                rows={3}
                            />
                            <div className="label">
                                {errors?.text && (
                                    <span className="label-text-alt text-error">
                                        {errors.text.message}
                                    </span>
                                )}
                            </div>
                        </label>
                        <AttachedPictures
                            attachedFiles={postImages}
                            remove={removePostImage}
                        />
                    </div>
                </div>

                <div>
                    {creationError && (
                        <ErrorAlert errorMessage={creationError} />
                    )}
                    <div className=" divider"></div>
                    <div className=" flex  items-center justify-between">
                        <div className=" flex items-center gap-1.5 ">
                            <AttachPicture
                                maxFilesAttached={
                                    postImages.length >= MAX_IMAGES_PER_POST
                                }
                                append={appendPostImage}
                                imageTypes={ACCEPTED_IMAGE_TYPES}
                            />
                            <AttachEmoji appendEmoji={appendEmoji} />
                            <button
                                type="button"
                                className=" btn btn-circle btn-ghost btn-sm"
                            >
                                <StatsIcon />
                            </button>
                            <button
                                type="button"
                                className=" btn btn-circle btn-ghost btn-sm"
                            >
                                <GifIcon />
                            </button>
                            <button
                                type="button"
                                className=" btn btn-circle btn-ghost btn-sm"
                            >
                                <ScheduleIcon />
                            </button>
                        </div>

                        <button
                            type="submit"
                            className={`  btn btn-primary btn-sm ${(errors?.postImages || errors?.text || !isDirty || postIsPending) && 'btn-disabled !bg-base-200'} `}
                        >
                            <p>Post</p>
                            {postIsPending && (
                                <span className="loading loading-spinner loading-sm"></span>
                            )}
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default CreatePostForm
