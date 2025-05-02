import React from "react";
import { Link, Outlet } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/products/add">Add Product</Link>
        </li>
        <li>
          <Link to="/products/3">Product 3</Link>
        </li>
      </ul>
      <Outlet context={{ name: "ali" }} />
    </>
  );
};

export default SideBar;
