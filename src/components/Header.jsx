import React from "react";
import miniLogo from '../images/mini-logo.png'

function Header({ setActiveSection }) {

    return (
        <>

            <div className="header">

                <p onClick={() => setActiveSection("shop")} className="nav-link">SHOP</p>
                <p onClick={() => setActiveSection("about")} className="nav-link">ABOUT</p>
                <p onClick={() => setActiveSection("home")} className="nav-link">HOME</p>
                <img src={miniLogo} alt="logo" />

            </div>

        </>
    )
}

export default Header;