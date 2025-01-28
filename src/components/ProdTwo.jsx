import React from "react";
import prodTwo from '../images/royal.png'
import prodThree from '../images/rocksalt.png'

function ProdTwo() {

    return (

        <>

            <div className="roast-2-3">

                <div className="roast-2">
                    <div className="prod-2-container">
                        <div className="prod-image-2">
                            <img src={prodTwo} alt="" />
                        </div>

                        <div className="roast-2-info-section">

                            <h1 className="header">ROYAL ROAST</h1>

                            <p className="info">Indulge in the luxurious depth of our Royal roast, where smooth,
                                full-bodied flavors are accented with subtle notes of bourbon. This refined blend delivers a rich,
                                velvety experience fit for those who savor the finer things.</p>


                        </div>

                        <div className="add-to-cart">
                            <p>ADD TO CART</p>
                        </div>
                    </div>
                </div>


                <div className="roast-3">
                    <div className="prod-3-container">
                        <div className="prod-image-3">
                            <img src={prodThree} alt="" />
                        </div>

                        <div className="roast-3-info-section">

                            <h1 className="header">SALT ROAST</h1>

                            <p className="info"> Experience the bold allure of our Rock Salt roast,
                                a unique blend that balances robust coffee flavors with a delicate touch
                                of Himalayan salt. This distinctive combination creates a rich, savory-sweet profile that's as invigorating as it is unforgettable. </p>


                        </div>

                        <div className="add-to-cart">
                            <p>ADD TO CART</p>
                        </div>
                    </div>
                </div>


            </div>

        </>

    )


}

export default ProdTwo;