import React, { Component } from "react";
import "../../styles/styles.css"
import Img from  "../../assets/logo.svg"

const Navbar= () => {
        return <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark xdrxdrxdr">
                <div className="container">
                    <a className="navbar-brand" href="javascript:void(0)"><img src={Img}/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0)">XM Homepage</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0)">Support</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
}

export default Navbar
