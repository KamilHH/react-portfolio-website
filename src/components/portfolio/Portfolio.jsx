import React, {useEffect, useState} from 'react';
import './portfolio.scss'
import PortfolioList from "./PortfolioList";
import {list} from './PortfolioList';
import {featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio} from './portfolioData'

const Portfolio = () => {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio)
                break;
            case "web":
                setData(webPortfolio)
                break;
            case "mobile":
                setData(mobilePortfolio)
                break;
            case "design":
                setData(designPortfolio)
                break;
            case "content":
                setData(contentPortfolio)
                break;
        }
    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => {
                    return (
                        <PortfolioList
                            key={item.id}
                            title={item.title}
                            active={selected === item.id}
                            setSelected={setSelected}
                            id={item.id}
                        />
                    )
                })}
            </ul>
            <div className="container">
                {data.map(el =>(
                    <div key={el.id} className="item">
                        <img
                            src={el.img}
                            alt={el.title}
                        />
                        <h3>{el.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;