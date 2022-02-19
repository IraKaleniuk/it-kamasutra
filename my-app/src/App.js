import React from "react";
import './App.css';
import 'antd/dist/antd.min.css';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import Layout, {Content} from "antd/es/layout/layout";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <HeaderContainer />
                <Layout>
                    <Navbar />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <Routes>
                                <Route path="/dialogs" element={<DialogsContainer/>}
                                />
                                <Route path="/profile/">
                                    <Route path=":userId" element={<ProfileContainer/>}/>

                            <Route path="status/:userId" element={<ProfileContainer/>}/>

                                    <Route path="" element={<ProfileContainer/>}/>
                                </Route>
                                <Route path="/users" element={<UsersContainer/>}
                                />
                                <Route path="/login" element={<Login/>}
                                />
                            </Routes>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
