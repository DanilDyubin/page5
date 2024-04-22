import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basketItems: [],
  totalAmount: 0,
  totalPrice: 0,
  open: false, // для модалки лучше сделать отдельный модуль состояния, но т/к тут она отвечает только за открытие корзины, поместим его здесь
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    onAdd: (state, action) => {
      const findItem = state.basketItems.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count += 1;
      } else {
        state.basketItems.push({ ...action.payload, count: 1 });
      }

      state.totalAmount = state.basketItems.reduce((acc, obj) => {
        return acc + obj.count;
      }, 0);

      state.totalPrice = state.basketItems.reduce((acc, obj) => {
        return acc + obj.price * obj.count;
      }, 0);
    },
    onDelete: (state, action) => {
      state.basketItems = state.basketItems.filter((item) => item.id !== action.payload.id);

      state.totalPrice = state.basketItems.reduce((acc, obj) => {
        return acc + obj.price * obj.count;
      }, 0);

      state.totalAmount = state.basketItems.reduce((acc, obj) => {
        return acc + obj.count;
      }, 0);
    },
    onModalOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onAdd, onDelete, onModalOpen } = basketSlice.actions;

export default basketSlice.reducer;
