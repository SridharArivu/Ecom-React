import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import {AppContextProvider} from './Context/Context';
import { Provider } from 'react-redux';
import store from './store/redux-store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
       <AppContextProvider>
        <App/>
      </AppContextProvider>
    </Provider>
      
  </React.StrictMode>
);


