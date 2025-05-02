import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import Contact from "../screens/Contact";
import SideBar from "../components/SideBar";
import Products from "../screens/Products";
import ProductDetails from "../screens/ProductDetails";
import AddProduct from "../screens/AddProduct";
import NotFound from "../screens/NotFound";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<SideBar />}>
        <Route index element={<Products />} />
        <Route path=":id" element={<ProductDetails />} />
        <Route path="add" element={<AddProduct />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
