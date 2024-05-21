import { Fragment, ReactNode } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface Props {
    isOpen: boolean
    close: () => void
    children?: ReactNode
    staticMode?: boolean
    asWindow?: boolean
}

const Modal = ({
    isOpen,
    close,
    children,
    staticMode = false,
    asWindow = true,
}: Props) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                onClose={() => {
                    return staticMode ? {} : close()
                }}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div
                        className={`flex min-h-full items-center justify-center text-center ${asWindow && 'p-4'}`}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            {/* overflow-hidden overflow-y-auto */}
                            <Dialog.Panel
                                className={` max-h-[550px]  transform   rounded-2xl bg-base-300 text-left align-middle shadow-xl transition-all ${asWindow ? 'w-full max-w-md p-6' : 'w-fit'}`}
                            >
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default Modal
