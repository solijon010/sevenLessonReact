import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  initialState: localStorage.getItem("cartProducts")
    ? JSON.parse(localStorage.getItem("cartProducts"))
    : [],
  name: "products",
  reducers: {
    addToCart: (state, { payload }) => {
      const cartProducts = !state.find((products) => products.id == payload.id)
        ? [...state, { ...payload, amount: 1 }]
        : state.map((product) =>
            product.id === payload.id
              ? { ...product, amount: product.amount + 1 }
              : product
          );
      localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
      return cartProducts;
    },
    minusFromCart: (state, { payload }) => {
      const findProduct = [...state].find(
        (product) => product.id === payload.id
      );
      if (findProduct.amount === 1) {
        const cartProducts = [...state].filter((products) => {
          return products.id !== payload.id;
        });
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
        return cartProducts;
      } else {
        const cartProducts = [...state].map((products) => {
          return products.id == payload.id
            ? { ...products, amount: products.amount - 1 }
            : products;
        });
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
        return cartProducts;
      }
    },
    removeFromCart: (state, { payload }) => {
      const cartProducts = [...state].filter((products) => {
        return products.id !== payload.id;
      });
      localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
      return cartProducts;
    },
  },
});

export const { addToCart, minusFromCart,removeFromCart } = productsSlice.actions;
export default productsSlice.reducer;
