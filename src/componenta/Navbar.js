import React from 'react';
import {connect} from "react-redux";
import {updateState} from "../action/worksAction";
import {Dropdown, DropdownMenu, DropdownToggle, DropdownItem} from "reactstrap";
import {Link} from "react-router-dom";

const Navbar = (props) => {
    console.log(props);
    console.log(props);
    console.log(props);
    return (
        <div className="text-white navbar ">
            <img className="logo" src="/image/logo.svg" alt="Error"/>
            <Dropdown className="text-white mr-3 drop bg-transparent" isOpen={props.open} toggle={() => props.updateState({open: !props.open})}>
                <DropdownToggle>
                    En <img src="/image/bottom.svg" alt="Error"/>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>En</DropdownItem>
                    <DropdownItem>Uz</DropdownItem>
                    <DropdownItem>Ru</DropdownItem>
                </DropdownMenu>
            </Dropdown>

            <div className="toggle toggle--daynight mx-2 pt-2">
                <input type="checkbox" id="toggle--daynight" className="toggle--checkbox d-none"/>
                    <label className="toggle--btn" htmlFor="toggle--daynight"><span className="toggle--feature"></span></label>
            </div>

            <div className="navigition"><ul className="nav">
                <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Works</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Prices</a></li>
                <li className="nav-item"><a href="#" className="nav-link">For Clients</a></li>
                <li className="nav-item"><a href="tel:" className="nav-link">Contact</a></li>
                <li className="nav-item"><a href="tel: +16475639114" className="nav-link">+1 (647-563-9114)</a></li>
                <li className="nav-item"><a href="https://wonderful-roentgen-9cfde0.netlify.app/"
                                            className="nav-link" target="_blank">
                    Start a project <img src="/image/play.svg" alt="Error"/>
                </a></li>
            </ul></div>

        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        open: state.works.open,
    }
};

export default connect(mapStateToProps, {updateState})(Navbar);