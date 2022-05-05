import React from 'react'

const CartNumber = ({children,cartNumber}) => {
    return (
        <div className="d-flex" >
        <p>{cartNumber}</p>
        {children}
        </div>
    
    )
}

export default CartNumber;