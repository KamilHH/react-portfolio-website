import React, {useState} from 'react';
import './works.scss'
import {ReactComponent as Left} from "../../assets/arrow_back.svg";
import {ReactComponent as Right} from "../../assets/arrow_forward.svg";
import Mobile from "../../assets/phone_iphone_FILL0_wght300_GRAD0_opsz40.svg";
import Pencil from "../../assets/edit_FILL0_wght300_GRAD0_opsz40.svg";
import Globe from "../../assets/language_FILL0_wght300_GRAD0_opsz40.svg";

const Works = () => {
    const [slide, setSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: Globe ,
            title: "Web Design",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            img:
                "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
            id: "2",
            icon: Mobile,
            title: "Mobile Application",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
                "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
            id: "3",
            icon: Pencil,
            title: "Branding",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
                "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
    ];

    const handleCLick = (way) =>{
        way === 'left'
            ? setSlide(slide > 0 ? slide -1 : data.length - 1)
            : setSlide(slide < data.length - 1 ? slide + 1 : 0);
    }
    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${slide * 100}vw)`}}>
                {data.map(el => {
                    const {id, icon, title, desc, img} = el;
                    return (
                        <div key={id} className="container">
                            <div className="item">
                                <div className="left">
                                    <div className="leftContainer">
                                        <div className="imgContainer">
                                            <img src={icon} alt=""/>
                                        </div>
                                        <h2>{title}</h2>
                                        <p>
                                            {desc}
                                        </p>
                                        <span>Projects</span>
                                    </div>
                                </div>
                                <div className="right">
                                    <img
                                        src={img}
                                        alt=""/>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Left className="arrow left" onClick={()=>handleCLick("left")} />
            <Right className="arrow right" onClick={()=>handleCLick()} />
        </div>
    );
};

export default Works;