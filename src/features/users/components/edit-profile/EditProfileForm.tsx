import { FaUserCircle } from 'react-icons/fa'
import { IUser } from '../../../authentication/interfaces'
import {
    Control,
    Controller,
    FieldErrors,
    SubmitHandler,
    UseFormRegister,
    useForm,
} from 'react-hook-form'
import { z } from 'zod'
import Input from '../../../../components/form/Input'
import Textarea from '../../../../components/form/Textarea'
import { forwardRef, useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import ImageFileDropzone from '../../../../components/form/ImageFileDropzone'
import fetchImageAsFile from '../../../../utils/api/fetchImageAsFile'
import useEditProfile from '../../hooks/useEditProfile'
import { useQueryClient } from '@tanstack/react-query'
import useQueryKeyStore from '../../../../utils/api/useQueryKeyStore'

interface Props {
    user: IUser
    close: () => void
}
const validationSchema = z.object({
    userImage: z.any(),
    backgroundImage: z.any(),
    firstName: z.string(),
    secondName: z.string(),
    bio: z.string(),
    location: z.string(),
    link: z.union([z.literal(''), z.string().url({ message: 'Invalid url' })]),
})
type FormType = z.infer<typeof validationSchema>

const EditProfileForm = forwardRef(
    ({ user, close }: Props, ref: React.ForwardedRef<HTMLButtonElement>) => {
        const [isImageLoading, setIsImageLoading] = useState(true)
        const {
            handleSubmit,
            register,
            formState: { errors, isDirty },
            control,
            setValue,
        } = useForm<FormType>({
            defaultValues: {
                userImage: [],
                backgroundImage: [],
                firstName: user.firstName,
                secondName: user.secondName,
                bio: user.bio,
                location: user.location,
                link: user.link,
            },
            resolver: zodResolver(validationSchema),
        })
        const editProfileMutation = useEditProfile()
        const queryClient = useQueryClient()
        const queryKeyStore = useQueryKeyStore()

        // getting File objects for server images, to set initial form value
        useEffect(() => {
            const loadUserImageFile = async () => {
                if (user?.userImageUrl) {
                    const file = await fetchImageAsFile(
                        user?.userImageUrl,
                        'userImage'
                    )
                    setValue('userImage', [file])
                }
            }
            const loadBackgroundImageFile = async () => {
                if (user.backgroundImageUrl) {
                    const file = await fetchImageAsFile(
                        user?.backgroundImageUrl,
                        'backgroundImage'
                    )
                    setValue('backgroundImage', [file])
                }
            }
            loadUserImageFile()
            loadBackgroundImageFile()
            setIsImageLoading(false)
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

        const onSubmit: SubmitHandler<FormType> = (data) => {
            const formData = new FormData()
            if (!isDirty) {
                close()
                return
            }
            for (const [key, value] of Object.entries(data)) {
                if (key === 'userImage' || key === 'backgroundImage') {
                    value.forEach((file: File) => formData.append(key, file))
                } else {
                    formData.append(key, value)
                }
            }
            editProfileMutation.mutate(formData, {
                onSettled: () => {
                    queryClient.invalidateQueries({
                        queryKey: queryKeyStore.users.detail(user.username)
                            .queryKey,
                        exact: true,
                    })
                    queryClient.invalidateQueries({
                        queryKey:
                            queryKeyStore.users.currentUserPreview.queryKey,
                        exact: true,
                    })
                },
            })
            close()
        }

        if (isImageLoading) {
            return (
                <div className=" loading loading-spinner loading-md text-center"></div>
            )
        }

        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <button ref={ref} type="submit" className=" hidden"></button>
                <BackgroundImageSection control={control} />
                <FormFields
                    control={control}
                    register={register}
                    errors={errors}
                />
            </form>
        )
    }
)

const BackgroundImageSection = ({
    control,
}: {
    control: Control<FormType>
}) => {
    return (
        <div className=" h-[190px] bg-base-200">
            <Controller
                control={control}
                name="backgroundImage"
                render={({ field }) => (
                    <ImageFileDropzone
                        onChange={field.onChange}
                        value={field.value}
                    />
                )}
            />
        </div>
    )
}

interface FormFieldProps {
    control: Control<FormType>
    register: UseFormRegister<FormType>
    errors: FieldErrors<FormType>
}
const FormFields = ({ control, register, errors }: FormFieldProps) => {
    return (
        <div className=" relative -top-[45px] mx-auto flex w-full max-w-screen-md flex-col gap-2">
            <div className=" px-8">
                <div className=" h-[90px] w-[90px] overflow-hidden rounded-full">
                    <Controller
                        control={control}
                        name="userImage"
                        render={({ field }) => (
                            <ImageFileDropzone
                                onChange={field.onChange}
                                value={field.value}
                                icon={FaUserCircle}
                            />
                        )}
                    />
                </div>
                <div className=" mt-5 flex flex-col">
                    <Input
                        {...register('firstName')}
                        isInvalid={!!errors.firstName}
                        errorMessage={errors?.firstName?.message}
                        label="First Name"
                        primaryBorder={false}
                    />
                    <Input
                        {...register('secondName')}
                        isInvalid={!!errors.secondName}
                        errorMessage={errors?.secondName?.message}
                        label="Second Name"
                        primaryBorder={false}
                    />

                    <Textarea
                        {...register('bio')}
                        rows={3}
                        isInvalid={!!errors.bio}
                        errorMessage={errors?.bio?.message}
                        label="Bio"
                        primaryBorder={false}
                    />
                    <Input
                        {...register('location')}
                        isInvalid={!!errors.location}
                        errorMessage={errors?.location?.message}
                        label="Location"
                        primaryBorder={false}
                    />
                    <Input
                        {...register('link')}
                        isInvalid={!!errors.link}
                        errorMessage={errors?.link?.message}
                        label="Link"
                        primaryBorder={false}
                    />
                </div>
            </div>
        </div>
    )
}

export default EditProfileForm
