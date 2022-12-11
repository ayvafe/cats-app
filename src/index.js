import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import storeFactory from "./store";

// Components
import App from './App';

// Classes
import './index.css';

const store = storeFactory();
const root = ReactDOM.createRoot(document.getElementById('root'));

window.React = React;
window.store = store;

root.render(
  <Provider store={store}>
      <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
