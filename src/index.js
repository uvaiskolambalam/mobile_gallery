import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import {store} from './redux/store'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // if remove <React.StrictMode> then react not render tow times
  // <React.StrictMode>
    <Provider store={store}>

    <App />
    </Provider>
  // </React.StrictMode>
);

