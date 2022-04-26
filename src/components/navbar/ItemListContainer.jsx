import React from 'react';

const ItemListContainer = ({children,cartNumber}) => {
    return (
        <div className="d-flex" >
            
        <p>{cartNumber}</p>
        {children}
       
        </div>
    )
}

export default ItemListContainer;