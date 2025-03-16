import React from "react";
import logo from '../images/big-logo2.png'


function Hero() {

    return (
        <>
            <div className="container">

                
                <main>
                    <div className="logo"><img src={logo} alt="logo-type" /></div>
                </main>


                <div className="gradient"></div>

            </div>
        </>
    )
}

export default Hero;