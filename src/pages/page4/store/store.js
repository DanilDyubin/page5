import { configureStore } from '@reduxjs/toolkit';
import basket from './slices/basketSlice';
import products from './slices/productsSlice';
import filter from './slices/filterSlice';

export const store = configureStore({
  reducer: { basket, products, filter },
});
