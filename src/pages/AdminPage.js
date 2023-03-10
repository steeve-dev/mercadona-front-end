import React from 'react';
import AdminHeader from "../components/Header/AdminHeader";
import Footer from "../components/Footer";
import '../style/style.css'
import BlocCategoryProduct from "../components/BlocCategoryProduct";

const AdminPage = () => {
    return (
        <div>
            <AdminHeader/>
            <BlocCategoryProduct/>
            <Footer/>
        </div>
    );
};

export default AdminPage;