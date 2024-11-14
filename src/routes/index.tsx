import { Route, Routes } from "react-router-dom";

import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import DashboardPage from "../pages/dashboard";


const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    )
}

export default Routers;