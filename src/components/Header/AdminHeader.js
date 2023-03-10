import React from 'react';
import AdminMenu from "./AdminMenu";
import HeaderTitle from "./HeaderTitle";

const AdminHeader = () => {
    return (
        <header>
            <HeaderTitle/>
            <AdminMenu/>
        </header>
    );
};

export default AdminHeader;