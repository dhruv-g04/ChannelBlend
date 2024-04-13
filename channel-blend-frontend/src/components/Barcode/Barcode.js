import React, { useState, useEffect, useRef } from 'react';
import Quagga from 'quagga'; // ES6
import { useNavigate } from 'react-router-dom';
import './Barcode.css';
import { CiBarcode } from "react-icons/ci";

const Barcode = () => {
    const [barcode, setBarcode] = useState(null); // State to store scanned barcode value
    const [scanning, setScanning] = useState(false); // State to track scanning status
    const navigate = useNavigate(); // useNavigate hook
    const scannerContainerRef = useRef(null); // Ref for the scanner container
    const quaggaRef = useRef(null); // Ref for the Quagga instance

    useEffect(() => {
        if (scanning) {
            startScanner(); // Start scanner if scanning
        } else {
            stopScanner(); // Stop scanner if not scanning
        }
    }, [scanning]);

    const startScanner = () => {
        Quagga.init({
            inputStream: {
                name: 'Live',
                type: 'LiveStream',
                target: scannerContainerRef.current, // Use ref to reference the element
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
            quaggaRef.current = Quagga; // Save Quagga instance to ref
            Quagga.start();
            Quagga.onDetected(onBarcodeDetected); // Register event handler for detected barcode
        });
    };

    const stopScanner = () => {
        if (quaggaRef.current) {
            quaggaRef.current.stop(); // Stop scanner if Quagga instance is available
        }
    };

    const onBarcodeDetected = (result) => {
        const id = result.codeResult.code.slice(0, -1); // Get the scanned barcode value and remove the last digit
        setBarcode(id); // Update state with scanned barcode value
        setScanning(false); // Stop scanning
        navigate(`/product/${id}`); // Navigate to product page with the scanned barcode
    };

    const handleClick = () => {
        if(scanning){
            stopScanner();
        }
        setScanning((prevScanning) => !prevScanning); // Toggle scanning status
    };

    return (
        <div>
            <div className="barcode-scanner" onClick={handleClick}>
                <CiBarcode />
                <div className='barcode-text'>Have a barcode?</div>
            </div>
            <div id="scanner-container" className={scanning ? 'visible' : 'hidden'} ref={scannerContainerRef}></div>
        </div>
    );
}

export default Barcode;
