import React from "react";
import logo from '../images/big-logo.png'


function Hero() {

    return (
        <>
            {/* <div className="container"></div> */}
            <div className="container">

                <main>
                    <div className="logo"><img src={logo} alt="logo-type" /></div>
                </main>

                <aside>
                    <div className="info-text">
                        <p className="hero-info">At BrewCraft, we believe coffee is more than a morning ritual—it’s an art form.
                            As an independent coffee roaster, we carefully source the finest beans from around the globe,
                            celebrating the unique stories and flavors each region has to offer. </p>

                        <p className="hero-info">Every batch is roasted with precision and passion,
                            ensuring every cup is a journey of bold taste and exceptional quality.
                            Whether you’re a seasoned coffee enthusiast or just starting your craft coffee adventure,
                            BrewCraft is here to awaken your senses, one perfect brew at a time. Welcome to the art of coffee.</p>
                    </div>

                    <div className="shop-button">
                        <p>SHOP OUR BEANS</p>
                    </div>
                </aside>
            </div>
<div className="gradient"></div>
        </>
    )
}

export default Hero;