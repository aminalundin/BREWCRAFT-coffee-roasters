import React from "react";
import cups from '../images/coffee-cups.png'

function Shop() {

    return (
        <>
            <div className="shop">

                <div className="shop-image"></div>

                <div className="shop-container">

                    <div className="column-one">

                        <div className="signature">
                            <h1 className="shop-subhead">SIGNATURE ROAST.............$14</h1>
                            <p className="shop-text">Lorem ipsum dolor sit amet consectetur. Quam a vulputate et in.
                                Viverra tortor lectus lacus aliquet at aliquet. Senectus turpis fames sed lectus eleifend nisl quam.
                                Lectus tincidunt massa nunc viverra eget eleifend dignissim.</p>
                            <button className="atc">add to cart</button>
                        </div>

                        <div className="royal">
                            <h1 className="shop-subhead">ROYAL ROAST.............$14</h1>
                            <p className="shop-text">Lorem ipsum dolor sit amet consectetur. Quam a vulputate et in.
                                Viverra tortor lectus lacus aliquet at aliquet. Senectus turpis fames sed lectus eleifend nisl quam.
                                Lectus tincidunt massa nunc viverra eget eleifend dignissim.</p>
                            <button className="atc">add to cart</button>
                        </div>

                    </div>

                    <div className="column-two">

                        <div className="cups">

                            <div className="reusable-cups">
                                <img src={cups} alt="reusable-cups" />
                            </div>
                            <div className="cups-info">
                                <h1 className="shop-subhead-cup">REUSABLE CUPS......$20</h1>
                                <p className="shop-text-cup">Lorem ipsum dolor sit amet consectetur. Quam a vulputate et in.
                                    Viverra tortor lectus lacus aliquet at aliquet. Senectus turpis fames sed lectus eleifend nisl quam.
                                </p>
                                <button className="atc-cup">add to cart</button>
                            </div>

                        </div>

                    </div>

                    <div className="column-three">

                        <div className="fairtrade">
                            <h1 className="shop-subhead">FAIRTRADE ROAST.............$16</h1>
                            <p className="shop-text">Lorem ipsum dolor sit amet consectetur. Quam a vulputate et in.
                                Viverra tortor lectus lacus aliquet at aliquet. Senectus turpis fames sed lectus eleifend nisl quam.
                                Lectus tincidunt massa nunc viverra eget eleifend dignissim.</p>
                            <button className="atc">add to cart</button>
                        </div>

                        <div className="salt">
                            <h1 className="shop-subhead">ROCK SALT ROAST.............$14</h1>
                            <p className="shop-text">Lorem ipsum dolor sit amet consectetur. Quam a vulputate et in.
                                Viverra tortor lectus lacus aliquet at aliquet. Senectus turpis fames sed lectus eleifend nisl quam.
                                Lectus tincidunt massa nunc viverra eget eleifend dignissim.</p>
                            <button className="atc">add to cart</button>
                        </div>

                    </div>
                </div>
                <div className="insta-reel">
                    <div className="img-1"></div>
                    <div className="img-2"></div>
                    <div className="img-3"></div>
                    <div className="img-4"></div>
                    <div className="img-5"></div>
                    <div className="img-6"></div>
                    <div className="img-7"></div>
                </div>
            </div>
        </>
    )


}

export default Shop;