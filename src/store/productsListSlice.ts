import { createSlice } from '@reduxjs/toolkit'

export type ProductsListSlice = {
  groupFilter: string | null;
  sortBy: 'date' | 'price';
  orderBy: 'desc' | 'asc';
}

export const productsListSlice = createSlice({
  name: 'user',
  initialState: {
    groupFilter: 'all',
    sortBy: 'date',
    orderBy: 'desc'
  },
  reducers: {
    filterByGroup: (state, action) => {      
      state.groupFilter = action.payload
    },
    sortByDate: (state) => {
      state.sortBy = 'date'
    },
    sortByPrice: (state) => {
      state.sortBy = 'price'
    },
    orderByAsc: (state) => {
      state.orderBy = 'asc'
    },
    orderByDesc: (state) => {
      state.orderBy = 'desc'
    }
  },
})

export const { filterByGroup, sortByDate, sortByPrice, orderByAsc, orderByDesc } = productsListSlice.actions

export default productsListSlice.reducer