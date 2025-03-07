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
                        <p>Contact</p>
                        <p>Careers</p>
                    </div>

                    <div className="socials">
                        <p className="footer-subheading">SOCIALS</p>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>X</p>
                    </div>

                    <div className="resources">
                        <p className="footer-subheading">RESOURCES</p>
                        <p>Delivery / Shipping</p>
                        <p>Refund Policy</p>
                        <p>Privacy Policy</p>
                    </div>

                    <div className="subscribe">
                        <p className="footer-subheading">SUBSCRIBE</p>
                        <input type="text" className="sub" placeholder="Email address" />
                        <p>Sign up to get exclusive pre-release access to new product
                            launches and Limited Edition coffees.</p>
                    </div>
                </div>

                <div className="copyright-container">
                    <p className="footer-subheading">&copy; BREWCRAFT ROASTERS</p>
                </div>

            </div>
        </>
    )
}

export default Footer;