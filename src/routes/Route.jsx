import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../views/home/Home";

export default function RouteF() {
    return (
        <Router>
            <Routes>
                <Route path="" element={<Home />} />
            </Routes>
        </Router>
    )
}