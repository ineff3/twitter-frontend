import { InputHTMLAttributes, forwardRef } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string
    isInvalid: boolean
    errorMessage?: string
    label?: string
    primaryBorder?: boolean
}

const Input = forwardRef(
    (
        {
            placeholder,
            isInvalid,
            errorMessage,
            label,
            primaryBorder = true,
            ...props
        }: Props,
        ref: any
    ) => {
        return (
            <>
                <label className=" form-control w-full max-w-lg">
                    {label && (
                        <div className="label">
                            <span className="label-text font-semibold">
                                {label}
                            </span>
                        </div>
                    )}
                    <input
                        placeholder={placeholder}
                        type="text"
                        className={` ${isInvalid ? 'input-error' : `${primaryBorder && ' input-primary'}`} input input-bordered w-full  max-w-lg text-base`}
                        ref={ref}
                        {...props}
                    />
                    <div className="label">
                        {isInvalid && (
                            <span className="label-text-alt text-error">
                                {errorMessage?.toString()}
                            </span>
                        )}
                    </div>
                </label>
            </>
        )
    }
)

export default Input
