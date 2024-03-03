import { MdOutlineErrorOutline } from 'react-icons/md'

const ErrorAlert = ({ errorMessage }: { errorMessage: string }) => {
    return (
        <div role="alert" className="alert alert-error  py-2.5">
            <MdOutlineErrorOutline size={25} />
            <span>{errorMessage}</span>
        </div>
    )
}

export default ErrorAlert
