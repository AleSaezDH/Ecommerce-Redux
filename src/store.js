import {configureStore} from '@reduxjs/toolkit';
import productsReducer from './reducers/products';
import cartReducer from './reducers/cart';
import loadingReducer from './reducers/loading';

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        loading: loadingReducer
    }
});

export default store;