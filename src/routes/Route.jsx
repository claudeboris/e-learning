import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../views/fronted/home/Home";
import Login from "../views/fronted/auth/login/Login";
import Register from "../views/fronted/auth/register/Register";
import Error400 from "../views/errors/400/Error400";
import Masterlayout from "../layouts/admin/masterlayout/Masterlayout";

export default function RouteF() {
    return (
        <Router>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/connexion" element={<Login />} />
                <Route path="/inscription" element={<Register />} />
                <Route path="/error.400" element={<Error400 />} />
                <Route path="/dashboard/home" element={<Masterlayout />} />
            </Routes>
        </Router>
    )
}