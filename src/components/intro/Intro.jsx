import React from 'react';
import './intro.scss'
import {KeyboardArrowDown} from "@material-ui/icons";

const Intro = () => {
    return (
        <div className="intro" id="home">
            <div className="left">
                <div className="imgContainer">

                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Kamil Woźniak</h1>
                    <h3>Frontend <span>Developer</span></h3>
                </div>
                <a href="#portfolio">
                    <KeyboardArrowDown/>
                </a>

            </div>
        </div>
    );
};

export default Intro;