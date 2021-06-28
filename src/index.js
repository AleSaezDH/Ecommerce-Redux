import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import {Provider} from 'react-redux';
import {getProductsFromLocalStorage} from './Middlewares/cartMdws';

store.dispatch(getProductsFromLocalStorage);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
