import React, { forwardRef } from 'react'
import { useCreateDraft } from '../../hooks/drafts/drafts'
import { UseFormGetValues } from 'react-hook-form'
import { CreatePostFormType } from '../../interfaces'

interface IProps {
    getFormValues: UseFormGetValues<CreatePostFormType>
}

const RemoteSaveDraft = forwardRef(
    ({ getFormValues }: IProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
        const saveDraftMutation = useCreateDraft()
        const onClick = () => {
            const formValues = getFormValues()
            const formData = new FormData()
            formValues.postImages.forEach(({ file }) => {
                formData.append('postImages', file)
            })
            formData.append('text', formValues.text)
            saveDraftMutation.mutate(formData)
        }

        return <button ref={ref} onClick={onClick} className=" hidden"></button>
    }
)

export default RemoteSaveDraft
