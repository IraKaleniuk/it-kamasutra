import React from "react";
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs" element={<DialogsContainer/>}
                        />
                        <Route path="/profile/">
                            <Route path=":userId" element={<ProfileContainer/>}/>
{/*
                            <Route path="status/:userId" element={<ProfileContainer/>}/>
*/}
                            <Route path="" element={<ProfileContainer/>}/>
                        </Route>
                        <Route path="/users" element={<UsersContainer/>}
                        />
                        <Route path="/login" element={<Login/>}
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
