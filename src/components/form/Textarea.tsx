import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    placeholder?: string
    isInvalid: boolean
    errorMessage?: string
    label?: string
    primaryBorder?: boolean
}

const Textarea = forwardRef(
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
                    <textarea
                        placeholder={placeholder}
                        className={` ${isInvalid ? 'textarea-error' : `${primaryBorder && 'textarea-primary'}`} textarea textarea-bordered  w-full max-w-lg resize-none text-base`}
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

export default Textarea
