import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  filteredProducts: [],
  categories: [],
  searchQuery: '',
  sortOption: '',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setSortOption(state, action) {
      state.sortOption = action.payload;
    },
    filterProducts(state) {
      let filtered = state.products;

      if (state.searchQuery) {
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      }

      if (state.sortOption) {
        filtered = filtered.sort((a, b) => {
          if (state.sortOption === 'price-asc') return a.price - b.price;
          if (state.sortOption === 'price-desc') return b.price - a.price;
          return 0;
        });
      }

      state.filteredProducts = filtered;
    },
  },
});

export const { setProducts, setCategories, setSearchQuery, setSortOption, filterProducts } = productSlice.actions;

export default productSlice.reducer;
