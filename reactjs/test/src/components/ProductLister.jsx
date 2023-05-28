import React, { useContext } from "react";

import Product from "./Product";
import TabComponentContext from "../context/TabComponentContext";

//props drillings context api -global state management
//props drillings @reduxjs/toolkit -global state management

const ProductLister = ({
  handleDeleteProduct,
  handleEditProduct,
  handleAddModalShow,
}) => {
  const { prods } = useContext(TabComponentContext);

  return (
    <>
      <button
        className="ms-5 mb-5 btn btn-secondary"
        onClick={handleAddModalShow}
      >
        Add Products
      </button>
      <div className="d-flex flex-wrap justify-content-evenly">
        {prods &&
          prods.length > 0 &&
          prods.map((prod) => {
            return (
              <Product
                key={prod.id}
                prod={prod}
                handleDeleteProduct={handleDeleteProduct}
                handleEditProduct={handleEditProduct}
              />
            );
          })}
      </div>
    </>
  );
};

export default ProductLister;
