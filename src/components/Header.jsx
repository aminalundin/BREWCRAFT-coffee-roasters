import React from "react";

function Header( {setActiveSection} ) {

    return (
        <>

       
        <div className="header">
            <p onClick={() => setActiveSection("home")} className="nav-link">HOME</p>
            <p onClick={() => setActiveSection("shop")} className="nav-link">SHOP</p>
            <p onClick={() => setActiveSection("about")} className="nav-link">ABOUT</p>
        </div>
       
        </>
    )
}

export default Header;