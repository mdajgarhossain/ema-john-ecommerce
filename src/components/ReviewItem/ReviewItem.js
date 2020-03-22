import React from 'react';
import './ReviewItem.css';

function ReviewItem(props) {
    // console.log(props);
    const {name, quantity, key, price} = props.product;
    
    return (
        <div className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>{quantity}</p>
            <p><small>${price}</small></p>
            <br/>
            <button 
                className="add-to-cart-btn" 
                onClick={() => props.handleRemoveProduct(key)}>
                    Remove Item
            </button>
        </div>
    )
}

export default ReviewItem
