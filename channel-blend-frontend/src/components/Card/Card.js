import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ product }) => {
    return (
        <div className="card">
            <img src={product.product_image} alt={product.product_name} />
            <h3>{product.product_name}</h3>
            <p>Brand: {product.brand_name}</p>
            <p>Price: ₹{product.price}</p>
            {/* Update Link to pass product id */}
            <Link to={`/product/${product._id}`} className='details-btn'>View Details</Link>
        </div>
    );
}

export default Card;
