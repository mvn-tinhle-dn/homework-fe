import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, value) => {
      const exist = state.value.some((prod) => prod.id === value.payload.id);
      if (!exist) {
        state.value.push(value.payload);
      }
    },
  },
});

export const { addCart } = cartSlice.actions;

export default cartSlice.reducer;
