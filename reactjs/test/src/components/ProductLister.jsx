import React from "react";

import Product from "./Product";

const ProductLister = ({ prods, handleDeleteProduct, handleEditProduct }) => {
  return (
    <>
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
