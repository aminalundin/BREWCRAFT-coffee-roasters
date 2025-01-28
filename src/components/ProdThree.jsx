import React from "react";
import prodFour from '../images/fairtrade.png'

function ProdThree() {

    return (
        <>
        <div className="roast-4">
                
                                    <div className="roast-4-info-section">
                                        <div className="roast-header">
                                            <h1 className="header">SIGNATURE ROAST</h1>
                                            
                                                <p className="info">Discover the warmth and depth of our Signature Blend, a harmonious roast with rich,
                                                    full-bodied flavors and a delicate hint of cinnamon spice.
                                                    Perfectly balanced, this blend is crafted to bring a cozy, aromatic touch to your everyday coffee ritual.</p>
                                           
                                        </div>
                                        <div className="add-to-cart">
                                            <p>ADD TO CART</p>
                                        </div>
                                    </div>

                                    <div className="prod-image-one">
                                        <img src={prodFour} alt="signature-roast-product-image" />
                                    </div>
                
                                </div>
        </>
    )
}

export default ProdThree;