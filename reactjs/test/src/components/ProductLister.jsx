import React, { useEffect, useState } from "react";

import Product from "./Product";
import { getData } from "../services/axios.service";
import { PRODUCTS_URL } from "../constants/api.constants";

const ProductLister = ({ prods }) => {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-evenly">
        {prods.map((prod) => {
          return <Product key={prod.id} prod={prod} />;
        })}
      </div>
      <h2>pagination</h2>
    </>
  );
};

export default ProductLister;
