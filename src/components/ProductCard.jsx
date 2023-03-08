import React, { createContext } from "react";
import { useContext } from "react";
import iphone from "../../public/products/iphone.png";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
const productCard = ({
  name,
  description,
  price,
  picture,
  category,
  prod,
  _id,
  quantity,
}) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="py-4">
        <div className="w-64 shadow-md p-4" key={_id}>
          <div className="bg-blue-100 p-5 rounded-xl">
            <img src={picture} height={300} alt="Mobile" />
          </div>
          <div className="mt-2 flex items-center justify-between">
            <h3 className="font-bold text-lg ">{name}</h3>
            <span className="text-xs">({category})</span>
          </div>
          <p className="text-sm mt-1 leading-4 ">{description}</p>
          <div className="flex mt-3">
            <div className="text-2xl font-bold grow">${price}</div>

            <button
              className="bg-emerald-400 text-white py-1 px-3 rounded-xl"
              onClick={() => dispatch(addToCart(prod))}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productCard;
