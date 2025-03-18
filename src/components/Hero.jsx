import React from "react";
import logo from '../images/big-logo2.png'
import video from '../images/BG-VIDEO.mp4'


function Hero() {

    return (
        <>
            <div className="container">

                <video autoPlay muted loop id="background-video">
                    <source src={video} type="video/mp4"/>
                </video>
                
                <main>
                    <div className="logo"><img src={logo} alt="logo-type" /></div>
                </main>


                <div className="gradient"></div>

            </div>
        </>
    )
}

export default Hero;