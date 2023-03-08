import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],

  totalPrice: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeToCart: (state, action) => {
      state.cart = state.cart.filter((prod) => prod._id !== action.payload);
    },
    incQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item._id === action.payload._id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    },
    decQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item._id === action.payload._id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    },
    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          console.log("carttotal", cartTotal);
          console.log("cartitem", cartItem);
          const { price, quantity } = cartItem;
          console.log(price, quantity);
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
  },
});

export const {
  addToCart,
  removeToCart,
  incQuantity,
  getCartTotal,
  decQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
