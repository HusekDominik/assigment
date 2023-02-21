import React, {useEffect, useState} from 'react';
import ModalService from "./ModalService";

interface IModalState{
    component: any;
    props: any;
    close: () => void;
}

export interface IModalProps {
    onClose: () => void;
}

const ModalRoot = () => {
    const [modal, setModal] = useState<IModalState | any>();

    useEffect(() => {
        ModalService.on("custom:openModal", (detail) => {
            document.body.style.overflow = "hidden";
            setModal({
                component: detail.component,
                props: detail.props,
                close: () => {
                    document.body.style.overflow = "unset";
                    setModal({});
                }

            })
            return () => {
                document.body.style.overflow = "unset";
            }
        })
    }, [])

    const ModalComponent : React.FC<IModalProps> = (modal && modal.component) ? modal.component : null;

    return (
        <div>
            {ModalComponent && (
                <ModalComponent {...modal.props} onClose={modal.close}/>
            )}
        </div>
    )
}

export default ModalRoot;