import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import '../style/style.css'
import BlocCategoryProduct from "../components/BlocCategoryProduct";

const CatalogProduct = () => {
    return (
        <div>
            <Header/>
            <BlocCategoryProduct/>
            <Footer/>
        </div>
    );
};

export default CatalogProduct;