import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './favSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favoriteReducer,
  },
})
