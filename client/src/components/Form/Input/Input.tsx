import * as React from "react";
import { useFormContext } from "react-hook-form";

interface Props {
    register?: any;
    name: string;
    type?: "email" | "password" | "text" | "number";
    placeholder?: string;
    error?: any;
    className?: string;
}

const defaultClassName = "input-container";

const Input: React.FC<Props> = ({
    name,
    className,
    type = "text",
    ...rest
}) => {
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
        <div
            className={
                className ? `${defaultClassName} ${className}` : defaultClassName
            }
        >
            <div className={"flex flex-col"}>
                <span className={"block text-red-500"}>{error}</span>
                <input
                    className={`w-full border-2 border-["#6A8ABC"] border-solid rounded-md p-2 input-global ${error ? "error" : ""}`}
                    {...register(name)}
                    type={type}
                    disabled={isSubmitting}
                    {...rest}
                />
            </div>
        </div>
    );
};

export default Input;
