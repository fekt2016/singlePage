import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('products');
  }
  return (
    <>
      <h1> My Home Pages</h1>
      <p>Go to <Link to="products">the list of products</Link></p>
      <button onClick={navigateHandler}>navigate</button>
    </>
  );
};

export default HomePage;
