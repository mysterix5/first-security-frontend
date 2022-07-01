import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./user-management/LoginPage";
import MainPage from "./components/MainPage";
import RegisterPage from "./user-management/RegisterPage";
import UserPage from './components/UserPage';
import AdminPage from './components/AdminPage';
import OauthPage from './user-management/OauthPage';

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
                    <Route path="/oauth" element={<OauthPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
