import React from "react";
import { useParams, useHistory } from "react-router-dom";

const ProductDetails=()=>{
  const params= useParams();
  const history = useHistory();

  const goBackHandler=()=>{
    history.goBack();
  }

  return<section>
    <h1>Product details page</h1>
    <p>{params.productId}</p>
    <button onClick={goBackHandler}>Back</button>
  </section>
}
export default ProductDetails;