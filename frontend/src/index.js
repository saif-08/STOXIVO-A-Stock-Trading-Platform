import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import PricingPage from './landing_page/pricing/PricingPage';
import ProductsPage from './landing_page/products/ProductsPage';
import Signup from './landing_page/signup/Signup';
import Login from './landing_page/signup/Login';
import SupportPage from './landing_page/support/SupportPage';
import AboutPage from './landing_page/about/AboutPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import PageNotFound from './landing_page/PageNotFound';
import { AuthProvider }from './Context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
  <CookiesProvider>
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/pricing" element={<PricingPage />} />
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    <Route path="/support" element={<SupportPage />} />
      <Route path="/about" element={<AboutPage />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
  <Footer />
     <ToastContainer
          position="top-right"
          autoClose={3000}
          closeOnClick
          pauseOnHover
        />
  </BrowserRouter>
  </ CookiesProvider>
  </ AuthProvider>
);


