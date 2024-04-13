import { CSSProperties, Fragment, ReactNode, SetStateAction, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { isMobile } from '../helpers';

export const Dialogs = ({ open, width, children }: { open: boolean, width?: number, children: ReactNode }) => {
    const cancelButtonRef = useRef(null);
    const mobile = isMobile();

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative" style={{ zIndex: 1030 }} initialFocus={cancelButtonRef} onClose={() => {
                // setOpen
            }}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 transition-opacity" style={{ backgroundColor: "rgba(0,0,0,0.7)" }} />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto" style={{ width: mobile ? "100%" : (width || 680), margin: "auto" }}>
                    <div className="flex min-h-full items-end justify-center p-0 sm:p-0 text-center sm:items-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-200"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-60 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-t-3xl sm:rounded-xl dark:bg-transparent text-left transition-all sm:my-8 sm:w-full h-screen md:h-auto flex items-center justify-center">
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export const DialogsWithFooterAndTitle = ({ open, setOpen, children, title, width, close, css }: {
    open: boolean,
    setOpen?: (value: SetStateAction<boolean>) => void,
    children: ReactNode,
    title?: string,
    close?: () => void,
    width?: number,
    css?: CSSProperties
}) => {

    return (
        <Dialogs open={open} width={width}>
            <div className="bg-transparent dark:bg-[#1a1b1f] p-4 sm:p-6 sm:pb-4" style={css}>
                <div className='flex items-center justify-between'>
                    {title ? <h1 className="font-black text-2xl font-Poppins-bold pb-4 text-textColor dark:text-[rgba(225,225,225)]">{title}</h1> : <div className="h-6" />}
                    {setOpen && <div className="cursor-pointer mb-4 md:-mr-6 mr-0" onClick={() => {
                        if (close) {
                            close()
                            return
                        }
                        setOpen?.(false);
                    }}>
                        <CloseButton />
                    </div>}
                </div>

                {children}
            </div>
        </Dialogs>
    )
}

export const CloseButton = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5.75586" y="4.62012" width="19.2688" height="1.60573" rx="0.802867" transform="rotate(45 5.75586 4.62012)" fill="#ffffff" />
            <rect x="4.61914" y="18.2451" width="19.2688" height="1.60573" rx="0.802867" transform="rotate(-45 4.61914 18.2451)" fill="#ffffff" />
        </svg>
    )
}
