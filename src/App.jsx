import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import "./styles/global.css";
import BachilleratoVirtual from "./pages/BachilleratoVirtual";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bachillerato-virtual" element={<BachilleratoVirtual />} />
            </Routes>
        </BrowserRouter>
    );
}
