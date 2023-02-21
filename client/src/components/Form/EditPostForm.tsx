import * as React from 'react';
import Modal from "../modal/Modal";
import Form from "./Form";
import {editPostValidation} from "../../validation/postValidation";
import Input from "./Input/Input";
import Button from "../buttons/Button";

type DefaultValues = {
    title: string;
    text: string;
    postImg: string;
}

type Props = {
    onClose: () => void;
    title: string;
    onSubmit : (data: any) => void;
    defaultValues?: DefaultValues

}

const EditPostForm : React.FC<Props> = ({ onClose, title, onSubmit, defaultValues }) => {

    return (
        <Modal title={title} onClose={onClose}>
            <Form defaultValues={defaultValues ? defaultValues : ""} onSubmit={onSubmit} schema={editPostValidation}>
                {() => {
                    return (
                       <div>
                           <Input className={"mb-[1.125rem]"} type={"text"} placeholder={"Title"} name={"title"}/>
                           <Input className={"mb-[1.125rem]"} type={"text"} placeholder={"Description"} name={"text"}/>
                           <Input className={"mb-[1.125rem]"} type={"text"} placeholder={"Image URL"} name={"postImg"}/>
                           <Button className={"mr-2"} background={"grey"} type={"submit"}>{defaultValues ? "Edit" : "Add"}</Button>
                           <Button background={"danger"} onClick={onClose} type={"button"}>Close</Button>
                       </div>
                    )
                }}
            </Form>
        </Modal>
    )
}

export default EditPostForm;