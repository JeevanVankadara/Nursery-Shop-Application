import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const {name,category, image, cost} = action.payload;
      const quantity = 1;
      state.push({name, category, quantity, image, cost});
    },
    removeItem: (state, action) => {
      const {name} = action.payload;
      return state.filter(v => (v.name !== name));
    },
    updateQuantity: (state, action) => {
      const {name, flag} = action.payload;
      const item = state.find(v => v.name === name);
      if(flag === 1){
        item.quantity++;
      }else{
        if(item.quantity === 1) {
          return state.filter(v => v.name !== name);
        }else{
          item.quantity--;
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
