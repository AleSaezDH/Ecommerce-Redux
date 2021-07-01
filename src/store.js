import {configureStore} from '@reduxjs/toolkit';
import productsReducer from './reducers/products';
import cartReducer from './reducers/cart';
import loadingReducer from './reducers/loading';
import sideCartReducer from './reducers/sideCart';

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        loading: loadingReducer,
        sideCart: sideCartReducer
    }
});

export default store;