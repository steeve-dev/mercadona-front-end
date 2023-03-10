import React from 'react';
import CategorySort from "./BlocBody/CategorySort";
import ProductCard from "./BlocBody/ProductCard";

const BlocCategoryProduct = () => {
    return (
        <div className="section-category-product">
            <CategorySort/>
            <ProductCard/>
        </div>
    );
};

export default BlocCategoryProduct;