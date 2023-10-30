import { createSlice } from "@reduxjs/toolkit";


const loadOrderDetails = () =>{
   const data = localStorage.getItem("orderDetails");
   return data ? JSON.parse(data): [];
}

const loadUserDetails = () =>{
    const data = localStorage.getItem("userDetails");
    return data ? JSON.parse(data): [];
 }

const initialState = {
    orderDetails : loadOrderDetails(),
    userDetails:loadUserDetails(),
    address:[]
}

const accountSLice = createSlice({
    name:"account",
    initialState,
    reducers:{
        orderDetailsDispatch(state,action){
            state.orderDetails = action.payload;
        },
        userDetailsDispatch(state,action){
            state.accountDetails = action.payload;
        }

    }
})

export const accountActions = accountSLice.actions;

export default accountSLice;