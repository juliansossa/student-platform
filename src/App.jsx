import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import "./styles/global.css";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<div>About</div>} />
            </Routes>
        </BrowserRouter>
    );
}
