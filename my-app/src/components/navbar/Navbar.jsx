import React from "react";
import {NavLink} from "react-router-dom";
import {Menu} from "antd";
import Sider from "antd/es/layout/Sider";

const Navbar = () => {

    return (
        <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{height: '100%', borderRight: 0}}
            >
                <Menu.Item key="1">
                    <NavLink to="/profile/22531"> Profile </NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                    <NavLink to="/dialogs">Messages</NavLink>
                </Menu.Item>
                <Menu.Item key="3">
                    <NavLink to="/news">News</NavLink>
                </Menu.Item>
                <Menu.Item key="4">
                    <NavLink to="/music">Music</NavLink>
                </Menu.Item>
                <Menu.Item key="5">
                    <NavLink to="/users">Find
                        users</NavLink>
                </Menu.Item>
                <Menu.Item key="6">
                    <NavLink to="/settings">Settings</NavLink>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default Navbar;