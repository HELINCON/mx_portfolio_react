import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import {  AiOutlineDoubleRight } from "react-icons/ai";
import { PiHandSwipeLeft } from "react-icons/pi";
import './layout.css';
import Menus from "../menu/menus";


const Layout = () => {
    const [toggle, setToggle] = useState(true)


    //change toggle
    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <div className="sidebar-section">
                <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
                    <div className="sidebar-toggle-icons">
                        <p onClick={handleToggle}
                            title={toggle ? "Click to hide the sidebar" : "Click to show the sidebar"}
                        >
                            {
                                toggle ? (<PiHandSwipeLeft size={24} />) : (<AiOutlineDoubleRight size={30} />)
                            }
                        </p>
                    </div>
                    <Menus toggle={toggle} />
                </div>
                <div className="container"> <Home /></div>
            </div>
        </>
    );
};

export default Layout;
