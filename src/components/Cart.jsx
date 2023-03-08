import React, { useEffect, useState } from "react";
import iphone from "../../public/products/iphone.png";
import { DeleteIcon } from "../icon/icons";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { getCartTotal, incQuantity, removeToCart } from "../features/cartSlice";

const Cart = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCartItem
  );
  const [total, setTotal] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <>
      <Navbar />
      <div className="relative h-[100vh]">
        <div className="py-4 flex  items-center gap-8 flex-wrap ">
          {cart.map((cartProd) => (
            <div
              className="w-80 shadow-md p-4 relative mb-10"
              key={cartProd._id}
            >
              <div className="bg-blue-100 p-5 rounded-xl">
                <img src={cartProd.picture} alt="Mobile" className="h-56" />
              </div>
              <div className="mt-2 flex items-center justify-between">
                <h3 className="font-bold text-lg ">{cartProd.name}</h3>
                <span className="text-xs">{cartProd.category}</span>
              </div>

              <div className="flex mt-3">
                <div className="text-2xl font-bold grow">${cartProd.price}</div>
                <div className="flex items-center justify-center gap-2">
                  <button
                    className=" bg-red-600 text-white p-1 rounded-xl"
                    onClick={() => dispatch(removeToCart(cartProd._id))}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center  items-center">
          <div
            className=" bg-gray-800 flex justify-evenly items-center w-full
          p-4 fixed bottom-0  "
          >
            <h3 className="text-white">CartTotal : ${total}</h3>
            <button className="bg-emerald-400 text-white py-1 px-3 rounded-xl">
              Purchased
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

{
  /* <div className="w-96 shadow-md p-4">
<div className="bg-blue-100 p-5 rounded-xl">
  <img src={iphone} height={300} alt="Mobile" />
</div>
<div className="mt-2 flex items-center justify-between">
  <h3 className="font-bold text-lg ">Iphone Pro</h3>
  <span className="text-xs">Mobile</span>
</div>

<div className="flex mt-3">
  <div className="text-2xl font-bold grow">$799</div>
  <div className="flex items-center justify-center gap-2">
    <button className="bg-emerald-400 text-white py-1 px-3 rounded-xl">
      +
    </button>
    <h4>4</h4>
    <button className="bg-gray-400 text-white py-1 px-3 rounded-xl">
      -
    </button>
  </div>
</div>
</div> */
}
