import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      // add the product to list and if it already exists then increase the quantity
      if (state.length === 0) {
        return [{ ...action.payload, qty: 1 }];
      } else {
        const productId = action.payload.id;
        const isExists = state.some((prod) => prod.id === productId);
        const newCart = isExists
          ? state.map((prod) =>
              prod.id === productId ? { ...prod, qty: prod.qty + 1 } : prod
            )
          : [...state, { ...action.payload, qty: 1 }];
        return newCart;
      }
    },

    increaseProducts: (state, action) => {
      return state.map((prod) =>
        prod.id === action.payload ? { ...prod, qty: prod.qty + 1 } : prod
      );
    },

    decreaseProducts: (state, action) => {
      return state
        .map((pro) =>
          pro.id === action.payload ? { ...pro, qty: pro.qty - 1 } : pro
        )
        .filter((obj) => obj.qty !== 0);
    },

    removeAllProducts: () => {
      return [];
    },
  },
});

export const {
  addProduct,
  removeAllProducts,
  increaseProducts,
  decreaseProducts,
} = cartSlice.actions;

export default cartSlice.reducer;
