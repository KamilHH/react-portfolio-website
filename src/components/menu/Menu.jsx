import React from 'react';
import {menuData} from "./menuData";
import './menu.scss'
const Menu = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={`menu ${menuOpen && "active"}`}>
            <ul>
                {
                    menuData.map((el,i)=>{
                        const {path, title} = el;
                        return (
                            <li onClick={()=>{setMenuOpen(false)}} key={i}>
                                <a href={`/${path}`}>{title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Menu;