import React from 'react';
import Homepage from "../page/Homepage";


const Menu2 = (props) => {
    return (
        <Homepage history={props.history}>
            <div className="col-1"></div>
            <div className="menu2"><p className="h-100">Ourcustomers</p></div>
            <div className="col-8 menu-2 zzz">
                <h2 className="text-white mt-5">We have collaborated with brands such as</h2>
                <div className="row">
                    <div className="col-xl-4 col-10 ml-auto"><img src="/image/menu2rasm1.svg" className="w-100 mt-4" alt="Error"/></div>
                    <div className="col-xl-4 col-10 ml-auto"><img src="/image/menu2rasm2.svg" className="w-100 mt-5" alt="Error"/></div>
                    <div className="col-xl-4 col-10 ml-auto"><img src="/image/menu2rasm3.svg" className="w-100 mt-4" alt="Error"/></div>
                    <div className="col-xl-4 col-10 ml-auto"><img src="/image/menu2rasm4.svg" className="w-100 mt-4" alt="Error"/></div>
                    <div className="col-xl-4 col-10 ml-auto"><img src="/image/menu2rasm5.svg" className="w-100 mt-4" alt="Error"/></div>
                    <div className="col-xl-4 col-10 ml-auto"><img src="/image/menu2rasm6.svg" className="w-100 mt-4" alt="Error"/></div>
                    <div className="col-xl-4 col-10 ml-auto"><img src="/image/menu2rasm7.svg" className="w-100 mt-4" alt="Error"/></div>
                    <div className="col-xl-4 col-10 ml-auto"><img src="/image/menu2rasm8.svg" className="w-100 mt-5" alt="Error"/></div>
                    <div className="col-xl-4 col-10 ml-auto"><img src="/image/menu2rasm9.svg" className="w-100 mt-5" alt="Error"/></div>
                </div>
            </div>
        </Homepage>
    );
};

export default Menu2;