import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const cartProducts = useSelector((state) => state.products);

  return (
    <header className="navbar bg-base-100 shadow-md fixed z-10">
      <div className="container flex items-center">
        <Link to={"/"} className="btn btn-ghost text-xl mr-auto">
          Products
        </Link>
        <Link to={"/cart"} className="relative flex">
          {!!cartProducts.length && (
            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-primary w-6 h-6 flex items-center justify-center text-xs font-bold text-white rounded-full">
              {cartProducts.length}
            </span>
          )}

          <FaCartShopping size={24} />
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
