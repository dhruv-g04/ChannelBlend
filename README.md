# ChannelBlend

## Description
ChannelBlend is an internship assignment provided by ChannelBlend company.

## Tech Stack
- React
- Node
- Express
- MongoDB

## Website Demo Video
[Drive Link](https://drive.google.com/file/d/1yhVZryDLKlzPlWUijkBIM05AsSvPx4l5/view)

## Source Code Repository
The source code for this project is available on GitHub. You can access it [here](https://github.com/dhruv-g04/ChannelBlend).

## Setup and Running Instructions
To set up and run the application locally, follow these steps:
Clone the repository to your local machine.
```bash
git clone git@github.com:dhruv-g04/ChannelBlend.git 
```
### To run frontend
1. Navigate to channel-blend-frontend
```bash
cd channel-blend-frontend
```
2. Install dependencies using 
```bash
npm install
npm install quagga react-dom react-router-dom react-icons
```
3. Run the application.
```bash
npm start
```
4. Access the application in your browser at `http://localhost:3000`.

### To run backend
1. Navigate to channel-blend-backend.
```bash
cd channel-blend-backend
```
2. Install dependencies using 
```bash
npm install
```
3. Run using 
```bash
nodemon
```

## API Endpoints
1. GET /api/products

Description: Retrieve all products from the database.

Example: GET /api/products

2. GET /api/product/:id

Description: Retrieve a specific product by its ID.

Example: GET /api/product/345678901234

## Design Decisions and Challenges Faced
Implementing the barcode scanner feature posed several challenges. One of the main difficulties was determining the appropriate barcode type that would seamlessly integrate with our product data and provide an efficient scanning experience for users. After careful evaluation, I opted to generate barcodes of the EAN-13 type and focused solely on implementing this specific type.

```js
decoder: {
    readers: ['ean_reader'],
},
```
This decision allowed us to streamline the barcode scanning process and ensure compatibility with our product data structure. By exclusively utilizing the EAN-13 barcode type, we were able to simplify implementation and enhance the user experience.

