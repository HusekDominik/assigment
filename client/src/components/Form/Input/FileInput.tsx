import * as React from "react";
import { useFormContext } from "react-hook-form";

type Props = {
    register?: any;
    name: string;
    placeholder?: string;
    error?: any;
    accept?: any;
};

const FileInput: React.FC<Props> = ({ name, ...rest }) => {
    const {
        register,
        formState: { isSubmitting, errors },
    } = useFormContext();

    // @ts-ignore
    const error: string =
        errors[name as string] && errors[name as string]?.message
            ? errors[name as string]?.message
            : "";
    return (
        <>
            <span className={"block text-red-500"}>{error}</span>
            <input
                disabled={isSubmitting}
                {...register(name)}
                type={"file"}
                {...rest}
            />
        </>
    );
};

export default FileInput;
