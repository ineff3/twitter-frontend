import axios from './axios'

const fetchImageAsFile = async (url: string, fileName: string) => {
    try {
        const response = await axios.get(url, {
            responseType: 'blob',
        })
        const mimeType = response.headers['content-type'] || 'image/jpeg'
        const fileExtension = mimeType.split('/')[1]
        const blob = new Blob([response.data], { type: mimeType })
        return new File([blob], `${fileName}.${fileExtension}`, {
            type: mimeType,
        })
    } catch (err) {
        console.error(err)
    }
}

export default fetchImageAsFile
