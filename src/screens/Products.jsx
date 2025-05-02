import React from "react";
import { useOutletContext } from "react-router-dom";

const Products = () => {
  const { name } = useOutletContext();
  return (
    <div>
      <h1>Products Page: {name} </h1>
    </div>
  );
};

export default Products;
