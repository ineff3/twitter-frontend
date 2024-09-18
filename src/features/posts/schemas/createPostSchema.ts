import { z } from 'zod'

export const MAX_IMAGES_PER_POST = 4
export const MAX_FILE_SIZE = 5000000
export const ACCEPTED_IMAGE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
]

const validationSchema = z
    .object({
        text: z.string().max(300, 'Cant exceed more than 300 symbols'),
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
                if (files.length > MAX_IMAGES_PER_POST) {
                    return false
                }
                return true
            }, 'No more than 5 pictures allowed'),
    })
    .refine((data) => data.postImages.length > 0 || data.text !== '', {
        message: 'Text or image is required',
    })

export default validationSchema
