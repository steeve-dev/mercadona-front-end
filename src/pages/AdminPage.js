import React from 'react';
import AdminHeader from "../components/Header/AdminHeader";
import CategorySort from "../components/CategorySort";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import '../style/style.css'

const AdminPage = () => {
    return (
        <div>
            <AdminHeader/>
            <CategorySort/>
            <ProductCard/>
            <Footer/>
        </div>
    );
};

export default AdminPage;