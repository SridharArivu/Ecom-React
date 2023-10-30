import React, { createContext, useContext, useReducer, useState } from 'react'



const Context = createContext()

export const useGlobalState = () => useContext(Context);

const reducer = (state , action)=>{
  switch(action.type){
    case 'Add_to_cart':
        return {...state, cart: action.payload};
    default: return state;
  }
}

const loadfromLocalStorage = ()=>{
  const searchItem = localStorage.getItem('searchedProducts');
  return searchItem ? JSON.parse(searchItem) : [];
}

export const AppContextProvider = ({children}) => {
const [SearchProduct, SetSearchProduct] = useState(loadfromLocalStorage());


const initialstate = {
  cart:[],
}

const [state, dispatch] = useReducer(reducer, initialstate);

const value = {
  SearchProduct,
  SetSearchProduct,
  state,
  dispatch
  
};

  return (
    <Context.Provider value={value}>
        {children}
    </Context.Provider>
  )
}

export default Context;
