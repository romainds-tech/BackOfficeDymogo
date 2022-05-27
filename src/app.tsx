import {Dashboard} from './components/Dashboard/Dashboard';
import LoginPage from "./components/Auth/LoginPage";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import React, {useState} from "react";


export function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/dashboard" element={<Dashboard/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}