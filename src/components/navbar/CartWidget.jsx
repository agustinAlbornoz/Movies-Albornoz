import React from 'react';
import { BsBookmarkFill } from 'react-icons/bs';
import { BsFillBasket3Fill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const CartWidget = () => {
    return (
        <div>
            
        <Link to={'/cart'}><BsFillBasket3Fill /></Link>
        <BsBookmarkFill />
        
        </div>

    )
}

export default CartWidget