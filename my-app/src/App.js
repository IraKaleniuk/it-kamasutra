import React from "react";
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import Users from "./components/users/Users";
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import {sendMessage, updateNewMessageText} from "./redux/state";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs" element=
                            {<Dialogs
                                state={props.state.messagesPage}
                                dispatch={props.dispatch}
                            />}
                        />
                        <Route path="/profile" element=
                            {<Profile
                                state={props.state.profilePage}
                                dispatch={props.dispatch}
                            />}
                        />
                        {/*<Route path="/users" element=
                            {<Users/>}
                        />*/}
                        {/*   {<Route path="/music" element={<Music/>}/>}
                        {<Route path="/news" element={<News/>}/>}
                        {<Route path="/settings" element={<Settings/>}/>}*/}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
