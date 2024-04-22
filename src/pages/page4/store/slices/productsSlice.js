import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const load = async () => {
//   setLoading(true);
//   const response = await fetch('https://fakestoreapi.com/products');
//   const result = await response.json(); https://652e6d590b8d8ddac0b15c7e.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}
//   setProducts(result); https://652e6d590b8d8ddac0b15c7e.mockapi.io/phones?
//   setLoading(false);
// };

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  // const { id } = params;
  // const phoneId = id ? `&id=${id}` : '';
  const response = await fetch(`https://652e6d590b8d8ddac0b15c7e.mockapi.io/phones?`);
  const result = await response.json();
  // console.log(result);
  return result;
});

const initialState = {
  items: [],
  status: 'loading',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'success';
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'error';
        state.items = [];
      });
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
