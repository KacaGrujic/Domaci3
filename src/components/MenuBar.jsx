import React from "react";
import { Link } from "react-router-dom";
import { BsCartFill } from 'react-icons/bs';

function MenuBar({ cartNum, isHome, isShop }) {
  return (
    <div className={isHome === 1 ? "menu-bar" : "menu-else"}>
      <Link to="/" className="link-img-flower">
        <img
          src="https://www.pngfind.com/pngs/m/483-4830429_png-file-real-flowers-background-png-transparent-png.png"
          className={isHome === 1 ? "img-flower" : "img-flower-else"}
        />
      </Link>
      {isHome === 1 ? <br /> : <></>}

      <Link to="/" className={isHome === 1 ? "txt-flower" : "txt-flower-else"}>
        Cvecara
      </Link>
      <div
        className={
          isHome === 1 ? "menu-bar-items-div" : "menu-bar-items-div-else"
        }
      >
        <Link
          to="/shop"
          className="menu-bar-items"
          style={isShop === 1 ? { color: "red" } : { color: "white" }}
        >
          Prodavnica
        </Link>
      </div>
      {isShop === 1 ? (
        <Link to="/cart" className="cart-items">
          <BsCartFill className="icon-cart" />
          <p className="cart-num">{cartNum}</p>
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
}

export default MenuBar;
