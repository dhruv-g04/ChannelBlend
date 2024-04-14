import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './IndividualProductPage.css'; 
import Footer from '../Footer/Footer';
import { FaStar } from "react-icons/fa6";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const IndividualProductPage = () => {
  const { id } = useParams(); // Get the product ID from the URL parameter
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetch product details using the product ID
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
        setError(true);
      });
  }, [id]);

  if (error) {
    return <div>Error fetching product details. Please try again later.</div>;
  }

  if (!product) {
    return <div>No product found.</div>;
  }

  return (
    <div className="container">
      <div>
        <Link to={`/`} className='home-btn'> <span className='arrow'><IoArrowBackCircleOutline/></span> Home</Link>
      </div>
      <div className="product">
        <div>
          <img src={product.product_image} alt={product.product_name} />
        </div>
        <div className='product-details'>
          <h1>{product.product_name}</h1>
          <p>Brand: {product.brand_name}</p>
          <p>Price: ₹{product.price}</p>
          <p className="product-description">Description: {product.description}</p>
          <div className="product-rating">
            <span className="rating-label">Rating:</span> {product.reviews.rating} <span className='star'><FaStar /></span>
          </div>
          <div className="product-reviews-count">
            <span className="reviews-count-label">Reviews Count:</span> {product.reviews.count}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default IndividualProductPage;
