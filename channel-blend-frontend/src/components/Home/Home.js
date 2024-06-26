import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import Banner from '../Banner/Banner';
import Barcode from '../Barcode/Barcode';
import Footer from '../Footer/Footer';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products') 
      .then(response => {
        setProducts(response.data);
        // console.log("products", response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className='main-container'>
      <div className='sticky'>
        <Barcode />
      </div>
      <Banner />
      <div className='box'>
        <h1>Product Display</h1>
        <div className="card-container">
          {products.map(product => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      </div>
        <Footer/>
    </div>
  );
}

export default Home;
