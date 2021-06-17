import React from 'react';
import Navbar from "../componenta/Navbar";
import {Link} from "react-router-dom";

const Homepage = (props) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <Navbar/>

                    <div className="menu">
                        <ul className="nav flex-column">
                            <li className="nav-item"><Link to="/menu1" className={`nav-link ${props.history.location.pathname === "/menu1" ? 'active' : ""}`}><div className="circle"></div></Link></li>
                            <li className="nav-item"><Link to="/menu2" className={`nav-link ${props.history.location.pathname === "/menu2" ? 'active' : ""}`}><div className="circle"></div></Link></li>
                            <li className="nav-item"><Link to="/menu3" className={`nav-link ${props.history.location.pathname === "/menu3" ? 'active' : ""}`}><div className="circle"></div></Link></li>
                        </ul>
                    </div>

                    <div className="line"></div>

                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Homepage;