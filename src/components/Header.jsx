import React from "react";

function Header( {setIsShopOpen} ) {

    return (
        <>

        <div className="header">
           <p onClick={() => setIsShopOpen(prev => !prev)} className="shop-link">
            SHOP
           </p>
        </div>
        </>
    )
}

export default Header;