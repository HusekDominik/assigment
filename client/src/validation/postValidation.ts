import * as yup from "yup";

export const editPostValidation = yup.object({
    title: yup.string().required(),
    text: yup.string().required(),
    postImg: yup.string().required()
});