import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import NotFondPage from '../pages/NotFondPage';
import ProductDetail from '../pages/ProductDetail';

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<NotFondPage />} />
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Product />} />
                <Route path="/products/:title" element={<ProductDetail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
