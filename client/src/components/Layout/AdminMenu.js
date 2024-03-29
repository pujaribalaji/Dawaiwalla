import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h4>Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action"
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-pincode"
            className="list-group-item list-group-item-action"
          >
            Add Pincode
          </NavLink>
          <NavLink
            to="/dashboard/admin/banner"
            className="list-group-item list-group-item-action"
          >
            Create Banners
          </NavLink>
          <NavLink
            to="/dashboard/admin/BannersList"
            className="list-group-item list-group-item-action"
          >
            Banners
          </NavLink>
          <NavLink
            to="/dashboard/admin/OrdersList"
            className="list-group-item list-group-item-action"
          >
            Order List
          </NavLink>
          <NavLink
            to="/dashboard/admin/TextManager"
            className="list-group-item list-group-item-action"
          >
            Text Manager
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
