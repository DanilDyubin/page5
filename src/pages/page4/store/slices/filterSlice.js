import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  sort: { title: 'Сначала популярные', sortProperty: 'id&order=asc' },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    onSearch: (state, action) => {
      state.search = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    resetParams: (state) => {
      state.search = '';
      state.sort = { title: 'Сначала популярные', sortProperty: 'id&order=asc' };
    },
  },
});

export const { onSearch, setSort, resetParams } = filterSlice.actions;

export default filterSlice.reducer;
