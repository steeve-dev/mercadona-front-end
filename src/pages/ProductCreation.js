import React from 'react';
import AdminHeader from "../components/Header/AdminHeader";
import ProductFormCreation from "../components/ProductFormCreation";
import Footer from "../components/Footer";
import '../style/style.css'

const ProductCreation = () => {
    return (
        <div>
            <AdminHeader/>
            <ProductFormCreation/>
            <Footer/>
        </div>
    );
};

export default ProductCreation;