import {useEffect, useMemo} from "react";
import {createPortal} from "react-dom";

const modalRoot = document.getElementById('modal')!

interface ModalProps {
    children: JSX.Element
    toggle: () => void
}

const Modal = ({children, toggle}: ModalProps) => {

    const element = useMemo(() => document.createElement('div'), [])
    useEffect(() => {
        modalRoot.appendChild(element)

        return () => {
            modalRoot.removeChild(element)
        }
    })

    const modal = (
        <div className='h-full w-full fixed top-0 left-0 flex justify-center bg-black/[.8] z-50' onClick={toggle}>
            <div className='w-fit h-fit rounded-[10px] bg-white fixed p-[15px] top-24 '
                 onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )

    return createPortal(modal, element)
}
export default Modal