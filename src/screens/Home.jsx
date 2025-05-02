import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const buttonContact = () => {
    navigate("/contact");
  };
  return (
    <div>
      <h1 style={{ cursor: "pointer" }} onClick={buttonContact}>
        Home Page
      </h1>
      <button onClick={buttonContact}>Go To Contact</button>
    </div>
  );
};

export default Home;
