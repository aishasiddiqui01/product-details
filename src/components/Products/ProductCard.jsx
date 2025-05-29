import React from 'react';
import './ProductList.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card" role="region" aria-labelledby={`product-title-${product.id}`}>
            <img 
                src={product.image} 
                alt={`Image of ${product.title}`} 
                aria-hidden="true" 
            />
            <h3 id={`product-title-${product.id}`}>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating?.rate}</p>
        </div>
    );
};

export default ProductCard;