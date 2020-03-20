import React from 'react'
import { useParams } from 'react-router-dom'
import Product from '../Product/Product';
import fakeData from '../../fakeData';

function ProductDetail() {
    const {productKey} = useParams();
    const product = fakeData.find(product => product.key === productKey);
    // console.log(product);
    
    return (
        <div>
            <h2>Product Details:</h2>
            <Product 
                product={product}
                showAddToCart={false}
            />
        </div>
    )
}

export default ProductDetail
