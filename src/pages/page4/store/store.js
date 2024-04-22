import { configureStore } from '@reduxjs/toolkit';
import basket from './slices/basketSlice';
import products from './slices/productsSlice';

export const store = configureStore({
  reducer: { basket, products },
});
