import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux";
import { createStore } from "redux";
import RootReducer from "./redux/reducers/index";



const store = createStore(RootReducer);
ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
    </React.StrictMode>
)    