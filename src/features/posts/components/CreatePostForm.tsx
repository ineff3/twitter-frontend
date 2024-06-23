import UserIconLink from '../../../components/ui/UserIconLink'
import { InfiniteData, useQueryClient } from '@tanstack/react-query'
import { IUserPreview } from '../../authentication/interfaces'
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { GifIcon, ScheduleIcon, StatsIcon } from '../../../components/ui/icons'
import useCreatePost from '../hooks/useCreatePost'
import { CreatePostFormType } from '../interfaces'
import AttachPicture from './post-creation/AttachPicture'
import AttachedPictures from './post-creation/AttachedPictures'
import AttachEmoji from './post-creation/AttachEmoji'
import useQueryKeyStore from '../../../utils/api/useQueryKeyStore'
import CloseBtn from '../../../components/ui/CloseBtn'
import { IPostsResponse } from '../../../utils/api/interfaces'
import { useState } from 'react'
import ErrorAlert from '../../../components/ui/ErrorAlert'
import { AxiosError } from 'axios'

interface IProps {
    close: () => void
}
const MAX_IMAGES_PER_POST = 4
const MAX_FILE_SIZE = 5000000
const ACCEPTED_IMAGE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
]

const validationSchema = z
    .object({
        text: z.string().max(300, 'Cant exceed more that 300 symbols'),
        postImages: z
            .any()
            .refine((files) => {
                files.forEach(({ file }: { file: File }) => {
                    if (file?.size > MAX_FILE_SIZE) {
                        return false
                    }
                })
                return true
            }, `Max image size is 5MB.`)
            .refine((files) => {
                files.forEach(({ file }: { file: File }) => {
                    if (!ACCEPTED_IMAGE_TYPES.includes(file?.type)) {
                        return false
                    }
                })
                return true
            }, 'Only .jpg, .jpeg, .png and .webp formats are supported.')
            .refine((files) => {
                if (files.length > 5) {
                    return false
                }
                return true
            }, 'No more than 5 pictures allowed'),
    })
    .refine((data) => {
        return data.postImages.length > 0 || data.text !== ''
    })

const CreatePostForm = ({ close }: IProps) => {
    const [creationError, setCreationError] = useState<string | null>(null)
    const queryClient = useQueryClient()
    const queryKeyStore = useQueryKeyStore()
    const user: IUserPreview | undefined = queryClient.getQueryData(
        queryKeyStore.users.currentUserPreview.queryKey
    )
    const {
        handleSubmit,
        register,
        formState: { errors, isDirty, defaultValues },
        control,
        setValue,
        watch,
    } = useForm<CreatePostFormType>({
        mode: 'all',
        defaultValues: {
            text: '',
            postImages: [],
        },
        resolver: zodResolver(validationSchema),
    })
    const textArea = watch('text')
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'postImages',
    })
    const createPostMutation = useCreatePost()

    const onSubmit: SubmitHandler<CreatePostFormType> = (data) => {
        const formData = new FormData()
        data.postImages.forEach(({ file }) => {
            formData.append('postImages', file)
        })
        formData.append('text', data.text)
        createPostMutation.mutate(formData, {
            onError: (error) => {
                if (error instanceof AxiosError) {
                    setCreationError(
                        error.response?.data?.message || 'Something went wrong'
                    )
                }
            },
            onSuccess: (newPost) => {
                queryClient.setQueryData(
                    queryKeyStore.posts.all.queryKey,
                    (oldData: InfiniteData<IPostsResponse> | undefined) => {
                        if (!oldData) return oldData
                        const newPage = [newPost, ...oldData.pages[0].data]
                        return {
                            ...oldData,
                            pages: [
                                {
                                    ...oldData.pages[0],
                                    data: newPage,
                                },
                                ...oldData.pages.slice(1),
                            ],
                        }
                    }
                )
                close()
            },
        })
    }

    const appendEmoji = (emoji: any) => {
        const currentValue = textArea
        const newValue = `${currentValue}${emoji?.native}`
        setValue('text', newValue)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex min-h-[350px] flex-col "
        >
            <div className=" mb-5 flex items-center justify-between">
                <CloseBtn onClick={close} />
                <button
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
                    <AttachedPictures attachedFiles={fields} remove={remove} />
                </div>
            </div>

            <div>
                {creationError && <ErrorAlert errorMessage={creationError} />}
                <div className=" divider"></div>
                <div className=" flex  items-center justify-between">
                    <div className=" flex items-center gap-1.5 ">
                        <AttachPicture
                            maxFilesAttached={
                                fields.length >= MAX_IMAGES_PER_POST
                            }
                            append={append}
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
                        className={`  btn btn-primary btn-sm ${(errors?.postImages || errors?.text || !isDirty || createPostMutation.isPending) && 'btn-disabled !bg-base-200'} `}
                    >
                        <p>Post</p>
                        {createPostMutation.isPending && (
                            <span className="loading loading-spinner loading-sm"></span>
                        )}
                    </button>
                </div>
            </div>
        </form>
    )
}

export default CreatePostForm
