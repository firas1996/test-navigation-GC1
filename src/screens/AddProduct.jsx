import React from "react";
import { useOutletContext } from "react-router-dom";

const AddProduct = () => {
  const { name } = useOutletContext();
  return (
    <div>
      <h1>Add New Product: {name}</h1>
    </div>
  );
};

export default AddProduct;
