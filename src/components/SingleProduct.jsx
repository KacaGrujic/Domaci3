import React from "react";
import { BsPlusLg, BsDashLg } from "react-icons/bs";

function SingleProduct({ product, onAdd, inCart, onRemove }) {
  return (
    <div className="card" style={{ margin: 15 }}>
      <img src={product.url} alt="image" className="img-flowers" />
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-text">{product.description}</p>
        <p className="card-price">€ {product.price}</p>
      </div>
      {inCart === 0 ? (
        <>
          <button
            className="btn"
            onClick={() => onAdd(product.title, product.id)}
          >
            <BsPlusLg />
          </button>
          <button
            className="btn"
            onClick={() => onRemove(product.title, product.id)}
          >
            <BsDashLg />
          </button>
        </>
      ) : (
        <>
          <h3>Amount: {product.amount}</h3>

          <button
            className="btn"
            onClick={() => onRemove(product.title, product.id)}
            style={{ color: "purple" }}
          >
            Remove
          </button>
        </>
      )}
    </div>
  );
}

export default SingleProduct;
