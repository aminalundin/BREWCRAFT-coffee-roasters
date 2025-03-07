import React from "react";
import logo from '../images/big-logo2.png'


function Hero() {

    return (
        <>
            {/* <div className="container"></div> */}
            <div className="container">

                

                <aside>
                    <div className="info-text">
                        <p className="hero-info">Lorem ipsum dolor sit amet consectetur. Arcu neque pulvinar cursus ultricies sapien sed.
                            Imperdiet velit faucibus tristique fringilla commodo amet.
                            Commodo sagittis ut non ultrices nisl aliquam aliquam neque. At mi orci augue mollis placerat.
                            Tincidunt nisl sit tempus quisque sit.  </p>
                    </div>

                    <div className="shop-button">
                        <p>QUALITY</p>
                        <p>GUARANTEED</p>
                    </div>
                </aside>

                <main>
                    <div className="logo"><img src={logo} alt="logo-type" /></div>
                </main>
            <div className="gradient"></div>
            </div>
        </>
    )
}

export default Hero;