// @ts-nocheck
import * as React from "react";
import { useForm, FormProvider, UseFormReturn } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ReactNode } from "react";

type Props = {
    onSubmit: any;
    defaultValues?: any;
    children: (props: UseFormReturn) => ReactNode;
    schema: any;
};

const Form: React.FC<Props> = ({
   defaultValues = null,
   onSubmit,
   children,
   schema,
}) => {
    const methods = useForm({ defaultValues, resolver: yupResolver(schema) });

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit((data) =>
                    onSubmit(data, { setError: methods.setError, reset: methods.reset })
                )}
            >
                {children({ ...methods })}
            </form>
        </FormProvider>
    );
};

export default Form;
