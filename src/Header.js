import React, { useState } from 'react';
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import Avatar from "@material-ui/core/Avatar";
import {Link} from 'react-router-dom'

function Header() {
    const [inputSearch,setInputSearch] =useState("");
    


    return (
        <div className="header">
            <div className="header_left">
            <MenuIcon/>
            <Link to={"/"}>
            <img className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt=""/>
            </Link>
            
            </div>
            <div className="header_input">
            <input onChange={(e)=>setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text"/>
            
            <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="header_inputButton"/>
            </Link>
            
            </div>
            <div className="header_icons">
            <VideoCallIcon className="header_icons"/>
            <AppsIcon className="header_icons"/>
            <NotificationImportantIcon className="header_icons"/>
            <Avatar className="header_icons"/>
            </div>
            

            
        </div>
    )
}

export default Header
