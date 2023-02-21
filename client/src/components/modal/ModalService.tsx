import {IModalProps} from "./ModalRoot";
import React from "react";

interface ModalEventDetail {
    component : any;
    props?: any;
}

const ModalService = {
    on: (event : any, callback : (detail : ModalEventDetail) => any) => {
        document.addEventListener(event, (e) => callback(e.detail));
    },
    open: (component : React.FC<IModalProps>, props = {}) => {
        document.dispatchEvent(new CustomEvent("custom:openModal", {detail: {component, props}}))
    }
}

export default ModalService;