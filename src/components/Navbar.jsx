import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartIcon, LogoIcon } from "../icon/icons";

const Navbar = () => {
  const { cart } = useSelector((state) => state.allCartItem);
  return (
    <div className="flex items-center bg-emerald-600 justify-around h-14">
      <div className="flex items-center">
        <Link to="/">
          <h3 className="text-lg font-bold px-2 flex items-center text-white">
            <LogoIcon />
            fastEcom
          </h3>
        </Link>
      </div>
      <Link to="/cart">
        <div className="flex items-center gap-1">
          <CartIcon />
          <strong className="text-white font-bold">( {cart.length})</strong>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
