import React, { useState, useEffect } from 'react';
import Quagga from 'quagga'; // ES6
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Barcode.css';

const Barcode = () => {
    const [barcode, setBarcode] = useState(null); // State to store scanned barcode value
    const [scanning, setScanning] = useState(false); // State to track scanning status
    const navigate = useNavigate(); // useNavigate hook

    const startScanner = () => {
        setScanning(true); // Set scanning status to true
        Quagga.init({
            inputStream: {
                name: 'Live',
                type: 'LiveStream',
                target: document.querySelector('#scanner-container'), 
                constraints: {
                    width: 400,
                    height: 300,
                    facingMode: 'environment', // Use rear camera
                },
            },
            decoder: {
                readers: ['ean_reader'], 
            },
        }, (err) => {
            if (err) {
                console.error('Error initializing Quagga:', err);
                return;
            }
            Quagga.start();
            Quagga.onDetected(onBarcodeDetected); // Register event handler for detected barcode
        });
    };

    const onBarcodeDetected = (result) => {
        const id = result.codeResult.code.slice(0, -1); // Get the scanned barcode value and remove the last digit
        console.log("code");
        console.log(id);
        setBarcode(id); // Update state with scanned barcode value
        setScanning(false); // Stop scanning
        Quagga.stop(); // Stop scanner after barcode is detected
        navigate(`/product/${id}`); // Navigate to product page with the scanned barcode
    };    

    const handleClick = () => {
        if (!scanning) {
            startScanner(); // Start scanner if not already scanning
        }
    };

    return (
        <div id="scanner-container" className="barcode-scanner" onClick={handleClick}>
            {barcode }
            <p>Scanned Barcode: {barcode}</p>
        </div>
    );
}

export default Barcode;
