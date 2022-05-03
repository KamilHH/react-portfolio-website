import React from 'react';
import './topbar.scss'
import {Mail, PhoneAndroid} from "@material-ui/icons";

const Topbar = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={ "topbar " + (menuOpen && "active") }>
            <div className="wrapper">
                <div className="left">
                    <a href="#home" className="logo">portfolio.</a>
                    <div className="itemContainer">
                        <PhoneAndroid className="icon"/>
                        <span>+48 123 456 789</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>kamilwozniak.js@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;