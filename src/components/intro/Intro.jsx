import React from 'react';
import './intro.scss'
import {KeyboardArrowDown} from "@material-ui/icons";

const Intro = () => {
    return (
        <div className="intro" id="home">
            <div className="left">
                <div className="imgContainer">
                    <img src="" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Kamil Woźniak</h1>
                    <h3>Frontend Developer</h3>
                </div>
                <a href="#portfolio">
                    <KeyboardArrowDown/>
                </a>

            </div>
        </div>
    );
};

export default Intro;