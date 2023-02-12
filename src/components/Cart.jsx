import React from "react";
import SingleProduct from "./SingleProduct";
import Form from './Form';
import '../Form.css';

function Cart({ numProducts, products, onRemove }) {
  function ukupanIznos(){
    var ukupno=0;
    products.forEach((product)=>{
        ukupno=ukupno+product.price*product.amount;
    }
    );
    return ukupno;
}
let total = 0;

if(numProducts===0){
    return (
        <div className="emptyCart">
            Korpa je prazna!
        </div>
    );
}else{
    return(
      
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
            <Form
             numProducts={numProducts}
             ukupanIznos={ukupanIznos}
             />
          </div>
         
        </>
      )}
      
    </>
    
  );
    }
  // let total = 0;
  // return (
  //   <>
  //     <div className="all-products">
  //       {products.map(
  //         (prod) => (
  //           (total += prod.price * prod.amount),
  //           (
  //             <SingleProduct
  //               product={prod}
  //               key={prod.id}
  //               inCart={1}
  //               onRemove={onRemove}
  //             />
  //           )
  //         )
  //       )}
  //     </div>
  //     {total === 0 ? (
  //       <></>
  //     ) : (
  //       <>
  //         <div className="div-order">
  //           <h2 className="txt-your-order">Your order</h2>
  //           <table className="table-order">
  //             <tr>
  //               <th>Item</th>
  //               <th>Amount</th>
  //               <th>Price</th>
  //             </tr>
  //             {products.map((prod) => (
  //               <>
  //                 <tr>
  //                   <td>{prod.title}</td>
  //                   <td>{prod.amount}</td>
  //                   <td>€ {prod.price}</td>
  //                 </tr>
  //               </>
  //             ))}
  //           </table>
  //           <h3 className="txt-total">Total: € {total}</h3>
  //         </div>
  //       </>
  //     )}
  //   </>
    
  // );
  
}

export default Cart;
