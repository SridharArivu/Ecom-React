import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";

const loadFromLocalSTorage = () => {
    const auth = localStorage.getItem("credentilas");
    return auth ? JSON.parse(auth): null;
}

const loadAuthLocalSTorage = () => {
    const auth = localStorage.getItem("isAuthenticated");
    return auth ? JSON.parse(auth): null;
}



const initialState = {
    isAuthenticated: loadAuthLocalSTorage(),
    token:loadFromLocalSTorage(),
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        tokenDispatch(state, action){
            const token = action.payload;
            state.token = (token)
        },
        setAuthentication(state, action){
            const login = action.payload;
            state.isAuthenticated = (login)
        }
    }
})

const authSelector = state => state.auth;

export const isAuthenticatedSelector = createSelector(
    authSelector,
    auth => auth.isAuthenticated
)

export const authActions = authSlice.actions;

export default authSlice;