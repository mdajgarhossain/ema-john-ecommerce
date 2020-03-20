import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

function Shop() {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        // console.log('Product Added!', product);
        const newCart = [...cart, product];
        setCart(newCart);
        // console.log(newCart);
    };
    
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => 
                        <Product 
                            handleAddProduct={handleAddProduct} 
                            product={product}
                            showAddToCart={true}
                        />
                    )
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}/>
            </div>
            
        </div>
    )
}

export default Shop
