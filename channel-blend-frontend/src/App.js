import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card/Card';
import Banner from './components/Banner/Banner';
import './style.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products') // Proxy for development, update to 'http://localhost:5000/api/products' for production
      .then(response => {
        setProducts(response.data);
        console.log("products", response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <Banner />
      <div className='box'>
        <h1>Product Display</h1>
        <div className="card-container">
          {products.map(product => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
