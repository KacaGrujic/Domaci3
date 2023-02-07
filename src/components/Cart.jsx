import React from "react";
import SingleProduct from "./SingleProduct";

function Cart({ products, onRemove }) {
  let total = 0;
  return (
    <>
      <div className="all-products">
        {products.map(
          (prod) => (
            (total += prod.price * prod.amount),
            (
              <SingleProduct
                product={prod}
                key={prod.id}
                inCart={1}
                onRemove={onRemove}
              />
            )
          )
        )}
      </div>
      {total === 0 ? (
        <></>
      ) : (
        <>
          <div className="div-order">
            <h2 className="txt-your-order">Your order</h2>
            <table className="table-order">
              <tr>
                <th>Item</th>
                <th>Amount</th>
                <th>Price</th>
              </tr>
              {products.map((prod) => (
                <>
                  <tr>
                    <td>{prod.title}</td>
                    <td>{prod.amount}</td>
                    <td>€ {prod.price}</td>
                  </tr>
                </>
              ))}
            </table>
            <h3 className="txt-total">Total: € {total}</h3>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
