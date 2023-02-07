import React from "react";
import SingleProduct from "./SingleProduct";

function Shop({ products, onAdd, onRemove }) {
  return (
    <div className="all-products">
      {products.map((prod) => (
        <SingleProduct
          product={prod}
          key={prod.id}
          onAdd={onAdd}
          onRemove={onRemove}
          inCart={0}
        />
      ))}
    </div>
  );
}

export default Shop;
