import { createSlice, current } from "@reduxjs/toolkit";
import { initialCartItems, products } from "../../data";

const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || [],
  // localStorage.setItem("cart", JSON.stringify(initialCartItems.slice(0, 1))),
  // initialCartItems,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action, "action");
      state.items.push({
        item: action.payload,
        quantity: 1,
      });

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (cartItem) => cartItem?.item?.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    increaseItemQuantity: (state, action) => {
      const { id } = action.payload;
      console.log(id, "id");

      const itemToIncrease = state.items.find(
        (cartItem) => cartItem?.item?.id === id
      );

      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    decreaseItemQuantity: (state, action) => {
      const { id } = action.payload;
      const itemToDecrease = state.items.find(
        (cartItem) => cartItem?.item?.id === id
      );

      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cart");
    },
  },
});

export const selectItemsInCart = ({ cart }) => cart?.items;

export const selectTotalPrice = ({ cart }) => {
  return cart?.items.reduce((total, cartItem) => {
    return total + cartItem?.item?.price * cartItem?.quantity;
  }, 0);
};

export const {
  addToCart,
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
