import React from "react";
import logo from '../images/mini-logo.png'

function Footer() {

    return (
        <>
            <div className="footer-container">

                <div className="footer-logo">
                    <img src={logo} alt="" />
                </div>

                <div className="info-container">

                    <div className="get-in-touch">
                        <p className="footer-subheading">GET IN TOUCH</p>
                        <a href="#">Contact</a>
                        <a href="#">Careers</a>
                    </div>

                    <div className="socials">
                        <p className="footer-subheading">SOCIALS</p>
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                        <a href="#">X</a>
                    </div>

                    <div className="resources">
                        <p className="footer-subheading">RESOURCES</p>
                        <a href="#">Delivery / Shipping</a>
                        <a href="#">Refund Policy</a>
                        <a href="#">Privacy Policy</a>
                    </div>

                    <div className="subscribe">
                        <p className="footer-subheading">SUBSCRIBE</p>
                        <input type="text" className="sub" placeholder="Email address" />
                        <p className="sub-text">Sign up to get exclusive pre-release access to new product
                            launches and Limited Edition coffees.</p>
                    </div>
                </div>

                <div className="copyright-container">
                    <p className="copy-subheading">&copy; BREWCRAFT ROASTERS</p>
                </div>

            </div>
        </>
    )
}

export default Footer;