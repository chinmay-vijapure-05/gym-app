import React from 'react'
import SidebarRow from './SidebarRow'
import "./Sidebar.css"
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function CustomSidebar() {
    return (
        <Sidebar>
            <Menu>
                <MenuItem> <Link style={{all:"unset"}} to="/" >Home</Link> </MenuItem>
                {/* <SubMenu label="Dashboard">
                </SubMenu> */}
                <MenuItem> <Link  style={{all:"unset"}} to="/uploadVideo" >UploadVideo</Link> </MenuItem>
                <MenuItem> <Link  style={{all:"unset"}} to="/analysis" >Analysis</Link> </MenuItem>
                <MenuItem> <Link  style={{all:"unset"}} to="/upcomingExercise" >Upcoming Exercise</Link></MenuItem>
                <MenuItem><Link  style={{all:"unset"}} to="/currentExercise" >Current Exercise</Link></MenuItem>
                <MenuItem> <Link  style={{all:"unset"}} to="/explore" >Explore</Link> </MenuItem>
                <MenuItem> <Link  style={{all:"unset"}} to="/addExercise" >AddExercise</Link> </MenuItem>
                <MenuItem> <Link  style={{all:"unset"}} to="/contribute" >Contribute</Link> </MenuItem>
            </Menu>
        </Sidebar>
        // <div className="sidebar">
        //     <SidebarRow title="Home"/>
        //     <SidebarRow title="Login/Logout"/>
        //     <SidebarRow title="Analysis"/>
        //     <hr />
        //     <SidebarRow title="Dashboard"/>
        //     <hr />
        //     <SidebarRow title="Explore"/>
        //     <hr />
        //     <SidebarRow title="Add Exercise"/>
        //     <hr />
        //     <SidebarRow title="Contribute"/>
        //     <hr />
        // </div>
    )
}

export default CustomSidebar