import React from "react";
import prodOne from '../images/signature.png'
import prodTwo from '../images/royal.png'
function Shop() {

    return (
        <>
            <div className="shop-container">


                <div className="roast-1">
                    <div className="prod-image-one">
                        <img src={prodOne} alt="signature-roast-product-image" />
                    </div>

                    <div className="roast-info-section">
                        <div className="roast-header">
                            <h1>SIGNATURE ROAST</h1>
                            <div className="roast-info">
                                <p>Discover the warmth and depth of our Signature Blend, a harmonious roast with rich,
                                    full-bodied flavors and a delicate hint of cinnamon spice.
                                    Perfectly balanced, this blend is crafted to bring a cozy, aromatic touch to your everyday coffee ritual.</p>
                            </div>
                        </div>
                        <div className="add-to-cart">
                            <p>ADD TO CART</p>
                        </div>
                    </div>

                </div>


                <div className="roast-2-3">

                    <div className="roast-2">
                        <div className="prod-image-2">
                        <img src={prodTwo} alt="" />
                        </div>

                        <div className="roast-2-info-section">
                        <div className="roast-2-header">
                            <h1>ROYAL ROAST</h1>
                            <div className="roast-2-info">
                                <p>Discover the warmth and depth of our Signature Blend, a harmonious roast with rich,
                                    full-bodied flavors and a delicate hint of cinnamon spice.
                                    Perfectly balanced, this blend is crafted to bring a cozy, aromatic touch to your everyday coffee ritual.</p>
                            </div>
                        </div>
                        </div>

                        <div className="add-to-cart">
                            <p>ADD TO CART</p>
                        </div>
                    </div>

                    <div className="roast-3">

                    </div>

                </div>


            </div>
        </>
    )
}

export default Shop;