import React from "react";

import { RequireAuthRoute } from "./RouteModel";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import PostDetailPage from "../pages/PostDetailPage";

const MainRoute = () => {
    return (
        <Routes>
            {/* PRIVATE ROUTES */}
            <Route
                path="/"
                element={
                    <RequireAuthRoute>
                        <MainPage />
                    </RequireAuthRoute>
                }
            />
            <Route
                path="/post/:id"
                element={
                    <RequireAuthRoute>
                        <PostDetailPage />
                    </RequireAuthRoute>
                }
            />
        </Routes>
    );
};
export default MainRoute;
