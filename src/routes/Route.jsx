import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../views/fronted/home/Home";
import Login from "../views/fronted/auth/login/Login";
import Register from "../views/fronted/auth/register/Register";
import Error404 from "../views/errors/404/Error404";
import Masterlayout from "../layouts/admin/masterlayout/Masterlayout";
import AdminLogin from "../views/admin/auth/login/login";
import Primaire from "../views/fronted/enseignement/primaire/Primaire";
import Secondaire from "../views/fronted/enseignement/secondaire/Secondaire";
import Universitaire from "../views/fronted/enseignement/universtaire/Universitaire";

export default function RouteF() {
    return (
        <Router>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/connexion" element={<Login />} />
                <Route path="/inscription" element={<Register />} />
                <Route path="/enseignement/primaire" element={<Primaire />} />
                <Route path="/enseignement/secondaire" element={<Secondaire />} />
                <Route path="/enseignement/universitaire" element={<Universitaire />} />
                <Route path="*" element={<Error404 />} />
                <Route path="/dashboard/home" element={<Masterlayout />} />
                <Route path="/admin.connexion" element={<AdminLogin />} />
            </Routes>
        </Router>
    )
}