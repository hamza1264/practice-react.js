import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import NotFondPage from '../pages/NotFondPage';
import ProductDetail from '../pages/ProductDetail';
import About from '../pages/About';
import Signup from '../pages/Signup';
import Navbar from '../components/Navbar';
import Chackout from '../pages/Chackout';
import Card from '../pages/Card';

function Routing() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="*" element={<NotFondPage />} />
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Product />} />
                <Route path="/products/:title" element={<ProductDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/signup" element={<Signup />} >
                    <Route path="/chackout" element={<Chackout />} />
                    <Route path="/card" element={<Card />} />
                </Route>


            </Routes>
        </BrowserRouter>
    )
}

export default Routing


// <Route path="/signup" element={<Signup />}>
//   <Route index element={<Checkout />} />
//   <Route path="cart" element={<Cart />} />
// </Route>