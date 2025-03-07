import React from "react";
import logo from '../images/big-logo.png'

function About() {

    return (
        <>
            <div className="about-container">
                <div className="logo-container">
                        <img src={logo} alt="reusable-cups" />
                </div>
                <div className="about-info-container">
                    <div className="about-box">
                        <h1>ABOUT US</h1>
                    </div>
                    <div className="info-box">
                        <p>Lorem ipsum dolor sit amet consectetur. Donec condimentum pharetra eleifend vulputate dui ornare etiam nec a.
                            Sollicitudin non nulla malesuada massa semper massa id tellus.
                            Quis nec amet metus massa at in. Odio amet fringilla dignissim faucibus feugiat sit sagittis.
                            Iaculis in amet neque viverra sagittis varius.</p>

                            <p>Tellus ut sapien non facilisi vivamus aenean. Varius ut ut sit maecenas arcu diam.
                            Eu scelerisque elit adipiscing augue mollis nisl. Eu tellus non felis dolor ipsum mi posuere.
                            Volutpat in leo vestibulum euismod in erat. Consequat est amet laoreet feugiat nibh.
                            Tortor pellentesque ac ut sodales est interdum. Lacinia eu tortor eget elit molestie.
                            Vitae nibh odio lorem dui non vitae dictumst adipiscing purus.</p>
                    </div>
                </div>


            </div>
        </>
    )

}

export default About;