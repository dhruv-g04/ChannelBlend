import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import IndividualProductPage from './components/IndividualProductPage/IndividualProductPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<IndividualProductPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
