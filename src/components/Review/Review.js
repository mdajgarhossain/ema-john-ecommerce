import React, { useEffect, useState } from 'react'
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';

function Review() {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const auth = useAuth();

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
                {
                    !cart.length && <h2>Your Cart is empty! <a href="/shop">Add Products to your Cart</a> </h2>
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="shipment">
                        {
                            auth.user ? 
                            <button className="add-to-cart-btn">Proceed Checkout</button> : 
                            <button className="add-to-cart-btn">Login to Proceed </button>
                        }
                    </Link>
                </Cart>
            </div>
        </div>
    )
}

export default Review
