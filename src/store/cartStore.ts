import { createSlice } from '@reduxjs/toolkit'
import updateCart from '../utils/updateCart'
import deleteFromCart from '../utils/deleteFromCart'

export type CartStore = {
  cart: {
    product_uuid: string,
    amount: number,
  }
}

export const cartStore = createSlice({
  name: 'user',
  initialState: {
    cart: JSON.parse(localStorage.getItem('cart')!) || []
  },
  reducers: {
    addToCart: (state, action) => { 
      if(state.cart.find((item: CartStore['cart']) => item.product_uuid === action.payload)) {
        state.cart = state.cart.map((item: CartStore['cart']) => {
          if(item.product_uuid === action.payload) {
            item.amount += 1
          }
          return item;
        })
      }else{
        state.cart.push({product_uuid: action.payload, amount: 1})
      }

      localStorage.setItem('cart', JSON.stringify(state.cart))

      updateCart(state)
    },
    addAmount: (state, action) => {
      state.cart = state.cart.map((item: CartStore['cart']) => {
        if(item.product_uuid === action.payload) {
          item.amount += 1
        }
        return item;
      })

      localStorage.setItem('cart', JSON.stringify(state.cart))
    
      updateCart(state)
    },
    removeAmount: (state, action) => {
      if(state.cart.find((item: CartStore['cart']) => item.product_uuid === action.payload && item.amount === 1)) {
        return;
      }

      state.cart = state.cart.map((item: CartStore['cart']) => {
        if(item.product_uuid === action.payload) {
          item.amount -= 1
        }
        return item;
      })

      localStorage.setItem('cart', JSON.stringify(state.cart))
    
      updateCart(state)
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item: CartStore['cart']) => item.product_uuid !== action.payload)

      localStorage.setItem('cart', JSON.stringify(state.cart))
    
      deleteFromCart(action.payload)
    }
  },
})

export const { addToCart, addAmount, removeAmount, removeFromCart } = cartStore.actions

export default cartStore.reducer