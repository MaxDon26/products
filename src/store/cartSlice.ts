import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, Product } from "model";

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as CartItem[],
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload);
    },
    increaseQuntity: (state, action: PayloadAction<string>) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuntity: (state, action: PayloadAction<string>) => {
      const item = state.find((item) => item.id === action.payload);
      if (item && item.quantity === 1) {
        return state.filter((item) => item.id !== action.payload);
      }
      if (item) {
        item.quantity -= 1;
      }
    },
    clearCart: () => [],
  },

  selectors: {
    getTotalPrice: (state) =>
      state.reduce((acc, item) => acc + item.price * item.quantity, 0),
    getQuantityById: (state, id: string) => {
      const item = state.find((item) => item.id === id);
      return item ? item.quantity : null;
    },
  },
});

export const {
  addToCart,
  clearCart,
  removeItem,
  decreaseQuntity,
  increaseQuntity,
} = cartSlice.actions;
export const { getTotalPrice, getQuantityById } = cartSlice.selectors;

export default cartSlice.reducer;
