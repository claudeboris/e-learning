import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../views/home/Home";
import Contact from "../views/contact/Contact";
import Login from "../views/auth/login/Login";
import Register from "../views/auth/register/Register";

export default function RouteF() {
    return (
        <Router>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/connexion" element={<Login />} />
                <Route path="/inscription" element={<Register />} />
            </Routes>
        </Router>
    )
}