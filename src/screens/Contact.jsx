import React from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const payload = useLocation();
  let test = "abc";
  if (payload.state) {
    test = payload.state.test;
  }
  return (
    <div>
      <h1>Contact Page</h1>
      <h2>{test}</h2>
    </div>
  );
};

export default Contact;
