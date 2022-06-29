import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./user-management/LoginPage";
import MainPage from "./components/MainPage";
import RegisterPage from "./user-management/RegisterPage";
import UserPage from './components/UserPage';
import {Button} from '@mui/material';
import {
    useState
} from "../../../../../../../Applications/IntelliJ IDEA.app/Contents/plugins/JavaScriptLanguage/jsLanguageServicesImpl/external/react";
import AdminPage from './components/AdminPage';

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/userpage" element={<UserPage/>}/>
                    <Route path="/adminpage" element={<AdminPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
