import React from 'react';
import Homepage from "../page/Homepage";

const Menu3 = (props) => {
    return (
        <Homepage history={props.history}>
            <div className="col-1 menu3">
                <h1 className="text-white">Contacts</h1>
            </div>
            <div className="col-xl-5 col-12">
                <h4 className="conts">Contact us</h4>
                <p className="p mb-5">Let's get to the nex level together</p>

                <div className="input_wrap mb-4">
                    <input type="text" required/>
                    <label>Full name</label>
                </div>

                <div className="input_wrap mb-4">
                    <input type="text" required/>
                    <label>Email</label>
                </div>
                <div className="input_wrap">
                    <input type="textarea" required/>
                    <label>How can you help ?</label>
                </div>

                <button type="button" className="btn btn-danger mt-4">Send</button>

            </div>
            <div className="col-xl-5 col-12 tel pl-5">
                <a href="tel: +998999999999" target="_blank" className="text-white mt-4"><img src="/image/tel.svg" alt="Error" className="mr-4"/>+1 (647)-563-9114</a>
                <a href="https://mail.google.com/mail/u/0" target="_blank" className="text-white mt-4"><img src="/image/emain.svg" alt="Error" className="mr-4"/>lead@gmail.com</a>
                <a href="https://goo.gl/maps/aoBqHsepeoVTXVFt7" target="_blank" className="text-white mt-4"><img src="/image/locatsiya.svg" alt="Error" className="mr-4"/>Margaretenstraße 70/3, 1050 Vienna, Austria</a>

                <div className="row">
                    <div className="col-xl-6 col-10">
                        <div className="qwert">
                            <h5 className="text-white">BECOME A CLIENT</h5>
                            <p className="text-white mb-0">BECOME A CLIENT </p>
                            <p className="text-white">---------></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-10">
                        <div className="qwert">
                            <h6 className="text-white mt-3 mb-4">Follow us</h6>
                            <div className="d-flex">
                                <a target="_blank" href="https://google.com"><img src="/image/be.svg" className="" alt="Error"/></a>
                                <a target="_blank" href="https://fasecook.com"><img src="/image/facebook.svg" className="" alt="Error"/></a>
                                <a target="_blank" href="https://instagram.com"><img src="/image/insta.svg" className="" alt="Error"/></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-10">
                        <div className="p-3 bg-white">
                            <h5 className="">BECOME A CLIENT</h5>
                            <p className=" mb-0">BECOME A CLIENT </p>
                            <p className="">---------></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-10">
                        <div className="qwert">
                            <h5 className="text-white">BECOME A CLIENT</h5>
                            <p className="text-white mb-0">BECOME A CLIENT </p>
                            <p className="text-white">---------></p>
                        </div>
                    </div>
                </div>

            </div>

        </Homepage>
    );
};

export default Menu3;