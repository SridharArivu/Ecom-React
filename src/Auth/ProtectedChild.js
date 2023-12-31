import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedChild = ({children}) => {

    const token = localStorage.getItem("token");

    if(!token){
        return < Navigate to="/login" replace/>
    }else{
        return children;
    }
}

export default ProtectedChild