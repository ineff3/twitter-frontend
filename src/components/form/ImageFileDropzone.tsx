import Dropzone from 'react-dropzone'
import AddImageIconSvg from '../ui/icons/AddImageIconSvg'
import { IconType } from 'react-icons'

interface Props {
    onChange: (...event: any[]) => void
    value: File[]
    icon?: IconType
}

const ImageFileDropzone = ({ onChange, value, icon: Icon }: Props) => {
    const valueHasDefinedElements =
        value && value.length > 0 && value.every((el) => el)
    return (
        <Dropzone
            onDrop={(acceptedFiles) => {
                onChange(acceptedFiles)
            }}
            maxFiles={1}
            onDropRejected={(fileRejections) => {
                console.log(fileRejections)
            }}
            accept={{ 'image/*': ['.png', '.jpeg', '.jpg'] }}
            noClick
        >
            {({ getRootProps, getInputProps, open }) => (
                <div
                    className={` relative flex h-full w-full items-center object-cover  `}
                    // ${isDragActive && ' border-2 border-dashed duration-100 ease-in-out '}
                    {...getRootProps()}
                >
                    <input {...getInputProps()} />
                    {valueHasDefinedElements ? (
                        value.map((el, index) => (
                            <div className="h-full w-full" key={index}>
                                <img
                                    src={URL.createObjectURL(el)}
                                    alt="Profile"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        ))
                    ) : (
                        <div className="h-full w-full bg-base-200">
                            {Icon ? <Icon size="100%" /> : null}
                        </div>
                    )}
                    <button
                        type="button"
                        className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent bg-opacity-60 p-1 text-secondary duration-200 hover:bg-opacity-90 "
                        onClick={(event) => {
                            event.stopPropagation()
                            open()
                        }}
                    >
                        <AddImageIconSvg
                            width={28}
                            height={28}
                            fill="currentColor"
                        />
                    </button>
                </div>
            )}
        </Dropzone>
    )
}

export default ImageFileDropzone
