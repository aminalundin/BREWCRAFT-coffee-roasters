import React from "react";
import prodOne from '../images/signature.png'
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

                <div className="roast-2"></div>
            </div>
        </>
    )
}

export default Shop;