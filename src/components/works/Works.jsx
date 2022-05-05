import React from 'react';
import './works.scss'
import { PhoneAndroid} from "@material-ui/icons";
import {ReactComponent as Left} from "../../assets/arrow_back.svg";
import {ReactComponent as Right} from "../../assets/arrow_forward.svg";

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
                            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <Right className="arrow right"/>
            <Left className="arrow left"/>




        </div>
    );
};

export default Works;