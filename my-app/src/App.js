import React from "react";
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs" element=
                            {<DialogsContainer/>}
                        />
                        <Route path="/profile" element=
                            {<Profile/>}
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
