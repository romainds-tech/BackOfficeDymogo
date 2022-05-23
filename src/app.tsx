import { Dashboard } from './components/Dashboard/Dashboard';
import LoginPage from "./components/Auth/LoginPage";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import React, {useState} from "react";
import {ReportsCard} from "./components/Dashboard/ReportsCard/ReportsCard";


export function App() {
    const [token, setToken] = useState("");

    if(!token) {
        return <LoginPage setToken={setToken} />
    }
    
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}