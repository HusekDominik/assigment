import React from 'react';

import styles from "../../../../../react-testing/client/src/modal/modal.module.css";
import Button from "../buttons/Button";

type Props = {
    title: string;
    children?: any;
    sizeWidth?: string;
    onClose: () => void;
    onSubmit?: () => void;
}

const Modal = ({ title, children, sizeWidth, onClose} : Props) => {
    const DEFAULT_SIZE_WIDTH = "800px";
    return (
        <div className={styles["modal-window"]}>
            <div className={styles["modal-container"]} style={{width: sizeWidth ? sizeWidth : DEFAULT_SIZE_WIDTH}}>
                <div className={styles["modal-header"]}>
                    <h2 className={styles["title"]}>{title}</h2>
                    <Button background={"danger"} className={"text-2xl grid place-items-center hover:brightness-90"} onClick={() => onClose()}>&times;</Button>
                </div>
                <div className={styles["modal-body"]}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;