import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import productsListSlice from './productsListSlice'
import cartStore from './cartStore'

export default configureStore({
  reducer: {
    user: userSlice,
    productsList: productsListSlice,
    cart: cartStore
  },
})