import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';

function Shop() {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const handleAddProduct = (product) => {
        console.log('Product Added!');
        console.log(product);
    };
    
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => 
                        <Product 
                            handleAddProduct={handleAddProduct} 
                            product={product}
                        />
                    )
                }
            </div>
            <div className="cart-container">
                <h3>Cart</h3>
            </div>
            
        </div>
    )
}

export default Shop
