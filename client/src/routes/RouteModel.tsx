import * as React from "react";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import { ReactNode, useContext } from "react";
import AuthRoutes from "./auth/AuthRoutes";
import MainRoute from "./MainRoute";

interface authObject {
    children: ReactNode;
    redirectTo?: string;
}

const Routemodel = () => {
    return (
        <Router>
            <MainRoute />
            <AuthRoutes />
        </Router>
    );
};

export const RequireAuthRoute = ({
                                     children,
                                     redirectTo = "/auth/login",
                                 }: authObject): JSX.Element | any => {
    const { isLoggedIn } = useContext(LoginContext);

    return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

export default Routemodel;
