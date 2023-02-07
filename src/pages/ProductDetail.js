import React from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <>

      <h1>ProductDetail Page</h1>
      <p>{params.productId}</p>
      <p><Link to='..' relative="path">back</Link></p>
    </>
  );
};

export default ProductDetail;
