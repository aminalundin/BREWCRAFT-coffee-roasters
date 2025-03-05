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
                            <h1>SIGNATURE ROAST</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Quam a vulputate et in.
                                Viverra tortor lectus lacus aliquet at aliquet. Senectus turpis fames sed lectus eleifend nisl quam.
                                Lectus tincidunt massa nunc viverra eget eleifend dignissim.</p>
                            <button>add to cart</button>
                        </div>
                        <div className="royal">
                            <h1>ROYAL ROAST</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Quam a vulputate et in.
                                Viverra tortor lectus lacus aliquet at aliquet. Senectus turpis fames sed lectus eleifend nisl quam.
                                Lectus tincidunt massa nunc viverra eget eleifend dignissim.</p>
                            <button>add to cart</button>
                        </div>
                    </div>
                    <div className="column-two">
                        <div className="cups">
                            <div className="reusable-cups"><img src={cups} alt="reusable-cups" /></div>


                            <h1>REUSABLE CUPS</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Quam a vulputate et in.
                                Viverra tortor lectus lacus aliquet at aliquet. Senectus turpis fames sed lectus eleifend nisl quam.
                                Lectus tincidunt massa nunc viverra eget eleifend dignissim.</p>
                            <button>add to cart</button>
                        </div>
                    </div>
                    <div className="column-three">
                        <div className="fairtrade">
                            <h1>FAIRTRADE ROAST</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Quam a vulputate et in.
                                Viverra tortor lectus lacus aliquet at aliquet. Senectus turpis fames sed lectus eleifend nisl quam.
                                Lectus tincidunt massa nunc viverra eget eleifend dignissim.</p>
                            <button>add to cart</button>
                        </div>
                        <div className="salt">
                            <h1>ROCK SALT ROAST</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Quam a vulputate et in.
                                Viverra tortor lectus lacus aliquet at aliquet. Senectus turpis fames sed lectus eleifend nisl quam.
                                Lectus tincidunt massa nunc viverra eget eleifend dignissim.</p>
                            <button>add to cart</button>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )


}

export default Shop;