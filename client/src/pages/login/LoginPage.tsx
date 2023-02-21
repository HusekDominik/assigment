import * as React from 'react';
import Form from "../../components/Form/Form";
import Input from "../../components/Form/Input/Input";
import {loginSchema} from "../../validation/userValidation";
import {useContext} from "react";
import {LoginContext} from "../../context/LoginContext";
import {useNavigate} from "react-router-dom";
import {useMutation} from "@apollo/client";
import {LOGIN_APP_USER} from "../../mutations/UserMutations";
import Button from "../../components/buttons/Button";
import "./loginpage.scss";
import backgroundImg from "../../assets/login-background.png";

type Props = {

}

interface LoginRequest {
    email: string;
    password: string;
}

const LoginPage : React.FC<Props> = () => {
    const navigate = useNavigate();
    const { setIsLoggedIn } = useContext(LoginContext);
    const [ loginAppUser, { loading, error} ] = useMutation(LOGIN_APP_USER);

    const handleLoginUser = async (
        data: LoginRequest,
    ) => {
        try {
            const response = await loginAppUser({ variables:
                    {  loginAppUserInput: {
                            email: data.email,
                            password: data.password
                        }
                    }
            });

            if(response.data)  {
                localStorage.setItem("user", JSON.stringify(response.data.loginAppUser));
                setIsLoggedIn(true);
                navigate("/");
            }

        } catch (error: any) {
            return;
        }
    };


    return (
      <div className={"loginPage"}>
         <div className={"loginPage__wrapper"}>
            <div className={"loginPage__wrapper__text"}>
                <Form defaultValues={{email: "husekdominik@gmail.com"}} onSubmit={handleLoginUser} schema={loginSchema}>
                    {() => {
                        return (
                            <div>
                                <div className={"login-title-wrapper"}>
                                    <h4>Welcome back!</h4>
                                    <span>Please enter your details.</span>
                                </div>
                                {(error) && <p className={"text-red-500 mb-1"}>{error.message}</p>}
                                <Input className={"rounded-lg mb-[1.125rem]"}  type={"email"} placeholder={"Enter your e-mail"} name={"email"}/>
                                <Input className={"rounded-lg mb-[2.125rem]"}  type={"password"} placeholder={"password"} name={"password"}/>
                                <Button background={"grey"} className={"w-full rounded-md border p-2"}  disabled={loading} type={"submit"}>Submit</Button>
                            </div>
                        )
                    }}
                </Form>
            </div>
             <div className={"loginPage__wrapper__background"}>
               <img src={backgroundImg} alt={"background"} />
             </div>
         </div>
      </div>
    )
}
export default LoginPage;