import {createSlice} from "@reduxjs/toolkit";

import { createSelector } from 'reselect';



const loadCartFromLocalStorage = () => {
    const cart = localStorage?.getItem('cartItems');
    return cart ? JSON.parse(cart) : [];
  };




  

const cartSlice = createSlice({
    name: 'cart',
    initialState:  loadCartFromLocalStorage(),
    reducers:{
        addToCart(state,action) {
        const item = action.payload;
        const existingCartItem = state.find((i) => i.name === item.name);
        if(existingCartItem){
            existingCartItem.quantity += 1  ;
            existingCartItem.totalPrice += item.price;
        }else{
            state.push({...item, quantity:1, totalPrice:item.price});
        }  
        },

        removeFromCart(state, action){
          const itemId = action.payload;
          return state.filter((item) => item.id !== itemId);
        },

        incrementQuantity(state, action){
          const itemName = action.payload;
          const isItemExits = state.find((item) => item.name === itemName.name);
          if (isItemExits) {
            isItemExits.quantity += 1;
            isItemExits.totalPrice += itemName.price;
          }
          },
          decrement(state, action) {
            const itemName = action.payload;
            const existingCartItem = state.find((i) => i.name ===  itemName.name);
            if(existingCartItem && existingCartItem.quantity > 1 ){
              existingCartItem.quantity -= 1  ;
              existingCartItem.totalPrice -= itemName.price;
            }else{
              return state.filter((item) => item.name !== itemName.name);
          }
          },
    } 
});

export const TotalQuantity = (state) => {
    return state.cart.find((item) => item.price * item.quantity);
}




const cartItemsSelector = state => state.cart;

export const totalAmountSelector = createSelector(
  cartItemsSelector,
  cartItems => {
    return cartItems.reduce((totalAmount, cartItem) => {
      return totalAmount + cartItem.price * cartItem.quantity;
    }, 0);
  }
);





export const cartActions = cartSlice.actions;

export default cartSlice;


