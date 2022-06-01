import React from 'react';
import { BsFillBasket3Fill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const CartWidget = () => {
    return (
        <div className="iconCart">
            
        <Link to={'/cart'}><BsFillBasket3Fill /></Link>
        
        </div>

    )
}

export default CartWidget