import React from 'react';
import './works.scss'
import {PhoneAndroid} from "@material-ui/icons";

const Works = () => {
    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <PhoneAndroid className="img"/>
                                </div>
                                <h2>Title</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Aliquam aperiam, error est et ex harum optio quae reiciendis sed similique!
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="https://cdn.dribbble.com/users/3967258/screenshots/15463803/media/4fddb9a2caf3b3bd634060f706a91e73.png?compress=1&resize=1200x900" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;