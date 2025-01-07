import React from "react";

function Footer() {

    return (
        <>
            <div className="footer-container">
                <div className="get-in-touch">
                    <p>GET IN TOUCH</p>
                    <p>Contact</p>
                    <p>Careers</p>
                </div>
                <div className="socials">
                    <p>SOCIALS</p>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>X</p>
                </div>
                <div className="resources">
                    <p>RESOURCES</p>
                    <p>Delivery / Shipping</p>
                    <p>Refund Policy</p>
                    <p>Privacy Policy</p>
                </div>
                <div className="subscribe">
                    <p>SUBSCRIBE</p>
                    <input type="text" className="sub" />
                    <p>Sign up to get exclusive pre-release access to new product
                        launches and Limited Edition coffees.</p>
                </div>
            </div>
            <div className="copyright-container">

            </div>
        </>
    )
}

export default Footer;