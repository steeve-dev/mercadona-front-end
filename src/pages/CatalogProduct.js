import React from 'react';
import Header from "../components/Header/Header";
import CategorySort from "../components/CategorySort";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import '../style/style.css'

const CatalogProduct = () => {
    return (
        <div>
            <Header/>
            <CategorySort/>
            <ProductCard/>
            <Footer/>
        </div>
    );
};

export default CatalogProduct;