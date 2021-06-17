import React from 'react';
import Homepage from "../page/Homepage";

const Menu1 = (props) => {
    return (
        <Homepage history={props.history}>
            <div className="col-1 menu1">
                <h1 className="text-white">Portfolio</h1>
            </div>
            <div className="col-11">
                <div className="row">
                    <div className="col-xl-5 col-10 mlavto"><img className="w-100 mt-4" src="/image/menu1rams1.svg" alt="Error"/></div>
                    <div className="col-xl-5 col-10 mlavto"><img className="w-100 mt-4" src="/image/menu1rasm2.svg" alt="Error"/></div>
                    <div className="col-xl-5 col-10 mlavto"><img className="w-100 mt-4" src="/image/menu1rasm3.svg" alt="Error"/></div>
                    <div className="col-xl-5 col-10 mlavto"><img className="w-100 mt-4" src="/image/menu1rasm4.svg" alt="Error"/></div>
                </div>
            </div>
        </Homepage>
    );
};

export default Menu1;