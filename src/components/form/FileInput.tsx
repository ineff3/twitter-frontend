import Dropzone from 'react-dropzone'
import { FaUserCircle } from 'react-icons/fa'

interface Props {
    onChange: (...event: any[]) => void
    value: File[]
}

const FileInput = ({ onChange, value }: Props) => {
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
        >
            {({ getRootProps, getInputProps, isDragActive, open }) => (
                <div className=" flex w-full justify-center">
                    <div className=" relative h-fit w-fit ">
                        <div
                            className={`overflow-hidden rounded-full ${isDragActive && ' border-2 border-dashed duration-100 ease-in-out '} max-h-[140px] max-w-[140px]  `}
                            {...getRootProps()}
                        >
                            {!value ? (
                                <FaUserCircle size={130} />
                            ) : (
                                value.map((el, index) => (
                                    <div
                                        className=" h-[140px] w-[140px]"
                                        key={index}
                                    >
                                        <img
                                            src={URL.createObjectURL(el)}
                                            alt="Profile"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                ))
                            )}
                        </div>
                        <button
                            className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent bg-opacity-50 p-1 duration-200 hover:bg-opacity-90 "
                            onClick={open}
                        >
                            <input {...getInputProps()} />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="35px"
                                height="35px"
                                viewBox="0 0 48 48"
                                fill="#FFFF"
                            >
                                <path d="M20.5152 7C18.9718 7 17.5496 7.83679 16.8 9.18602L15.5145 11.5H11.75C8.57436 11.5 6 14.0744 6 17.25V34.25C6 37.4256 8.57436 40 11.75 40H22.9963C22.6642 39.2037 22.4091 38.3672 22.2402 37.5H11.75C9.95507 37.5 8.5 36.0449 8.5 34.25V17.25C8.5 15.4551 9.95507 14 11.75 14H16.9855L18.9854 10.4001C19.2941 9.84456 19.8797 9.5 20.5152 9.5H27.4848C28.1203 9.5 28.7059 9.84456 29.0146 10.4001L31.0145 14H36.25C38.0449 14 39.5 15.4551 39.5 17.25V22.7999C40.3823 23.1255 41.2196 23.544 42 24.0436V17.25C42 14.0744 39.4256 11.5 36.25 11.5H32.4855L31.2 9.18602C30.4504 7.83679 29.0282 7 27.4848 7H20.5152Z" />
                                <path d="M24 17C27.5278 17 30.5222 19.2834 31.586 22.4529C30.7711 22.6741 29.988 22.9726 29.2451 23.34C28.5411 21.1138 26.459 19.5 24 19.5C20.9624 19.5 18.5 21.9624 18.5 25C18.5 27.6415 20.3622 29.8481 22.8454 30.3786C22.5516 31.151 22.3292 31.9587 22.1865 32.7936C18.6418 31.972 16 28.7945 16 25C16 20.5817 19.5817 17 24 17Z" />
                                <path d="M46 35C46 41.0751 41.0751 46 35 46C28.9249 46 24 41.0751 24 35C24 28.9249 28.9249 24 35 24C41.0751 24 46 28.9249 46 35ZM36 29C36 28.4477 35.5523 28 35 28C34.4477 28 34 28.4477 34 29V34H29C28.4477 34 28 34.4477 28 35C28 35.5523 28.4477 36 29 36H34V41C34 41.5523 34.4477 42 35 42C35.5523 42 36 41.5523 36 41V36H41C41.5523 36 42 35.5523 42 35C42 34.4477 41.5523 34 41 34H36V29Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </Dropzone>
    )
}

export default FileInput
