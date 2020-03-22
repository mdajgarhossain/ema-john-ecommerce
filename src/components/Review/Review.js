import React, { useEffect, useState } from 'react'
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';

function Review() {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
        console.log('Order Placed!');
    };

    useEffect(() => {
        //cart
        const savedCart = getDatabaseCart(); //local storage object
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    }, []);

    const handleRemoveProduct = productKey => {
        console.log('Item Removed!!!', productKey);
        const newCart = cart.filter(product => product.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    };

    let orderPlacedMessage;
    if(orderPlaced) {
        orderPlacedMessage = <img src={happyImage} alt=""/>
    }
    return (
        <div className="review-container">
            <div className="product-container">
                {
                    cart.map(product => 
                            <ReviewItem 
                                key={product.key}
                                product={product}
                                handleRemoveProduct={handleRemoveProduct}
                            />
                        )
                }
                {
                    orderPlacedMessage
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button 
                        className="add-to-cart-btn"
                        onClick={handlePlaceOrder}
                    >
                            Place Order
                    </button>
                </Cart>
            </div>
        </div>
    )
}

export default Review
