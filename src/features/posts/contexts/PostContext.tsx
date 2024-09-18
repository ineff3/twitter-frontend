import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    FieldArrayWithId,
    FieldErrors,
    SubmitHandler,
    useFieldArray,
    UseFieldArrayAppend,
    UseFieldArrayRemove,
    useForm,
    UseFormRegister,
    UseFormWatch,
} from 'react-hook-form'
import { CreatePostFormType, IDraft } from '../interfaces'
import { zodResolver } from '@hookform/resolvers/zod'
import validationSchema from '../schemas/createPostSchema'
import useCreatePost from '../hooks/useCreatePost'
import { AxiosError } from 'axios'
import { useCreateDraft } from '../hooks/drafts/drafts'

interface IPostContextProps {
    register: UseFormRegister<CreatePostFormType>
    submitForm: () => void
    creationError: string | null
    isDirty: boolean
    appendEmoji: (emoji: any) => void
    postImages: FieldArrayWithId<CreatePostFormType, 'postImages', 'id'>[]
    appendPostImage: UseFieldArrayAppend<CreatePostFormType, 'postImages'>
    removePostImage: UseFieldArrayRemove
    errors: FieldErrors<CreatePostFormType>
    postIsPending: boolean
    saveToDraft: () => void
    setFormValues: (draft: IDraft) => void
}

const PostContext = createContext<IPostContextProps | null>(null)

// eslint-disable-next-line react-refresh/only-export-components
export const usePostContext = () => {
    return useContext(PostContext)
}

export const PostProvider = ({ children }: { children: React.ReactNode }) => {
    const [creationError, setCreationError] = useState<string | null>(null)
    const navigate = useNavigate()
    const {
        handleSubmit,
        register,
        formState: { errors, isDirty },
        control,
        setValue,
        getValues,
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
    const {
        fields: postImages,
        append: appendPostImage,
        remove: removePostImage,
    } = useFieldArray({
        control,
        name: 'postImages',
    })
    const createPostMutation = useCreatePost()
    const saveDraftMutation = useCreateDraft()

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
            onSuccess: () => {
                navigate(-1)
            },
        })
    }
    const submitForm = handleSubmit(onSubmit)

    const appendEmoji = (emoji: any) => {
        const currentValue = textArea
        const newValue = `${currentValue}${emoji?.native}`
        setValue('text', newValue)
    }

    const saveToDraft = () => {
        const formValues = getValues()
        const formData = new FormData()
        formValues.postImages.forEach(({ file }) => {
            formData.append('postImages', file)
        })
        formData.append('text', formValues.text)
        saveDraftMutation.mutate(formData)
    }
    const setFormValues = (draft: IDraft) => {
        setValue('text', draft.text, { shouldDirty: true })
        // set post images also :(
    }

    return (
        <PostContext.Provider
            value={{
                register,
                submitForm,
                creationError,
                isDirty,
                appendEmoji,
                postImages,
                appendPostImage,
                removePostImage,
                errors,
                postIsPending: createPostMutation.isPending,
                saveToDraft,
                setFormValues,
            }}
        >
            {children}
        </PostContext.Provider>
    )
}
