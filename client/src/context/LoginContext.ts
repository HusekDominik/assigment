import {createContext} from "react";

export interface UserAuthInterface {
    id?: string;
    username?: string;
    email?: string;
    password?: string;
}

export interface LoginContextInterface {
    userData: UserAuthInterface;
    isLoggedIn: boolean;
    setUserData: (userData: UserAuthInterface) => any;
    setIsLoggedIn: (auth: boolean) => any;
}

export const LoginContext = createContext<LoginContextInterface>({
    userData: {},
    isLoggedIn: false,
    setUserData: (userData: UserAuthInterface) => {},
    setIsLoggedIn: (auth: boolean) => {},
});
