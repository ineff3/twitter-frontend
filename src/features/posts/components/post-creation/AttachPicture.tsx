import { UseFieldArrayAppend } from 'react-hook-form'
import { ImageIcon } from '../../../../components/ui/icons'
import { useRef } from 'react'
import { CreatePostFormType } from '../../interfaces'

interface Props {
    maxFilesAttached: boolean
    append: UseFieldArrayAppend<CreatePostFormType>
    imageTypes: string[]
}

const AttachPicture = ({ append, imageTypes, maxFilesAttached }: Props) => {
    const postImageRef = useRef<HTMLInputElement | null>(null)

    const onChooseFile = () => {
        postImageRef?.current?.click()
    }

    const handleAddDocuments = (event: any) => {
        const uploadedFiles = Array.from(event.target.files)
        const files = uploadedFiles.map((file) => ({
            file,
        })) as { file: File }[]
        append(files)

        if (postImageRef.current) {
            postImageRef.current.value = ''
        }
    }

    return (
        <>
            <button
                onClick={onChooseFile}
                type="button"
                className={` btn btn-circle btn-ghost btn-sm ${maxFilesAttached && 'btn-disabled !bg-base-200'}`}
            >
                <ImageIcon />
            </button>

            <input
                disabled={maxFilesAttached}
                type="file"
                accept={imageTypes.join(', ')}
                className=" hidden"
                onChange={handleAddDocuments}
                ref={postImageRef}
            />
        </>
    )
}

export default AttachPicture
