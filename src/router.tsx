import React from "react";
import { MainPage } from "./pages/MainPage";
import { Profiles } from "./pages/Profiles";
import { Routes, Route } from "react-router-dom";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" index element={<Profiles />} />
            <Route path="/netflix" element={<MainPage />} />
        </Routes>
    );
};
