import React from 'react';
import './testimonials.scss'
import linkedin from '../../assets/linkedin.png'
import youtube from '../../assets/youtube.png'
import twitter from '../../assets/twitter.png'
import rightArrow from '../../assets/right-arrow.png'

const Testimonials = () => {
    const data = [
        {
            id: 1,
            name: "Tom Durden",
            title: "Senior Developer",
            img:
                "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: twitter,
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
            id: 2,
            name: "Alex Kalinski",
            title: "Co-Founder of DELKA",
            img:
                "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: youtube,
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
            featured: true,
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img:
                "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: linkedin,
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
    ];

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(el => (
                    <div className={el.featured ? "card featured": "card"}>
                        <div className="top">
                            <img className="left" src={rightArrow} alt=""/>
                            <img
                                className="user"
                                src={el.img} alt=""
                            />
                            <img className="right"
                                 src={el.icon}
                                 alt=""
                            />
                        </div>
                        <div className="center">
                            {el.desc}
                        </div>
                        <div className="bottom">
                            <h3>{el.name}</h3>
                            <h4>{el.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;