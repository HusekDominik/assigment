import React from "react";

import { Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/login/LoginPage";

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/auth/login" element={<LoginPage />} />
        </Routes>
    );
};
export default AuthRoutes;
