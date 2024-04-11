import React from 'react';
import './Card.css';

const Card = ({ product }) => {
    return (
        <div className="card">
            <img src={product.product_image} alt={product.product_name} />
            <h3>{product.product_name}</h3>
            <p>Brand: {product.brand_name}</p>
            <p>Price: ₹{product.price}</p>
            <button className='details-btn'>View Details</button>
        </div>
    );
}

export default Card; // Ensure Card component is exported
