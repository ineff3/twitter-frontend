import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import FileInput from '../../../../../components/form/FileInput'
import { z } from 'zod'
import useUpdateUserImage from '../../../hooks/useUpdateUserImage'
import { useNavigate } from 'react-router-dom'
import { pageRoutes } from '../../../../../routes'

const validationSchema = z.object({
    file: z.any(),
})

type FormType = z.infer<typeof validationSchema>

const PhotoForm = () => {
    const { control, watch, handleSubmit } = useForm<FormType>()
    const fileChanged = watch('file')
    const updateUserImageMutation = useUpdateUserImage()
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<FormType> = async (data) => {
        if (data.file) {
            const formData = new FormData()
            formData.set('userImage', data.file[0])
            formData.set('updateType', 'userImage')

            updateUserImageMutation.mutate(formData, {
                onError(err) {
                    console.error(err)
                },
                onSuccess(response) {
                    console.log('Success')
                    console.log(response)
                },
            })
        }
        navigate(pageRoutes.home)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex flex-1 flex-col"
        >
            <div className=" flex flex-1">
                <Controller
                    control={control}
                    name="file"
                    render={({ field }) => (
                        <FileInput
                            onChange={field.onChange}
                            value={field.value}
                        />
                    )}
                />
            </div>
            <button
                type="submit"
                className={`btn ${!fileChanged || fileChanged.length == 0 ? ' btn-accent' : 'btn-primary'} `}
            >
                {!fileChanged || fileChanged.length == 0 ? (
                    <>Skip for now</>
                ) : (
                    <>Next</>
                )}
            </button>
        </form>
    )
}

export default PhotoForm
