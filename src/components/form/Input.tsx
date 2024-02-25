import { InputHTMLAttributes, forwardRef } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string
    isInvalid: boolean
    errorMessage?: string
    rightLabel?: string
}

const Input = forwardRef(
    (
        { placeholder, rightLabel, isInvalid, errorMessage, ...props }: Props,
        ref: any
    ) => {
        return (
            <>
                <label className=" form-control w-full max-w-md">
                    <input
                        placeholder={placeholder}
                        type="text"
                        className={` ${isInvalid ? 'input-error' : 'input-primary'} input input-bordered  w-full max-w-md`}
                        ref={ref}
                        {...props}
                    />
                    <div className="label">
                        {isInvalid && (
                            <span className="label-text-alt text-error">
                                {errorMessage?.toString()}
                            </span>
                        )}
                        {rightLabel && (
                            <>
                                {!isInvalid && (
                                    <span className=" label-text-alt" />
                                )}

                                <span className=" link label-text-alt">
                                    {rightLabel}
                                </span>
                            </>
                        )}
                    </div>
                </label>

                {/* <div className=" flex w-full flex-col">
                    <div className=" mb-1 text-[12px] font-semibold">
                        {placeholder}
                    </div>
                    <input
                        className={` text-blurred w-full rounded-[5px] border px-3 py-1 outline-none focus:border-black focus:text-black
                    ${isInvalid ? 'border-red-600 text-red-600 focus:border-red-600 focus:text-red-600' : 'border-gray-400'}`}
                        ref={ref}
                        {...props}
                    />

                    {isInvalid && (
                        <div className=" mt-1 text-[10px] text-red-600">
                            {errorMessage?.toString()}
                        </div>
                    )}
                </div> */}
            </>
        )
    }
)

export default Input
