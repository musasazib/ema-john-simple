import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className="shop-container">
            <div className="product-container">
                <h2>Product: {products.length}</h2>
                {
                    products.map(product=><Product product={product}></Product>)
                }
            </div>
            <div className="card-container">
                <h2>Order Sammary</h2>
                <h4>Item Orderd:</h4>
            </div>
        </div>
    );
};

export default Shop;