import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <img src="/logo.png" alt="Company Logo" className="logo" />
            <div className='content'>
                <h1 className="company-name">Commerce Simplified</h1>
                <p className="tagline">Seamless Shopping, Infinite Possibilities</p>
            </div>
        </div>
    );
}

export default Banner;
