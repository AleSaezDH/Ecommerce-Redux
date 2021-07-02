import {db} from '../firebase';

const saveOnLocalStorage = (actualCart) => {
    localStorage.setItem('FullTimeForceTest', JSON.stringify(actualCart));
}

export const addProduct = (product) => {
    return async (dispatch, getState) => {
        const cartState = getState().cart;
        const copyState = [...cartState];
        let exist = copyState.find(data => data.id === product.id);
        if (exist) {
            let index = copyState.indexOf(exist);
            let copy = {...exist};
            copy.quantity = product.quantity + copy.quantity;
            copyState[index] = copy;
            await dispatch({type: 'cart/addProduct', payload: copyState});
            saveOnLocalStorage(copyState);
        } else {
            let finalCart = [...copyState, product];
            await dispatch({type: 'cart/addProduct', payload: finalCart});
            saveOnLocalStorage(finalCart);
        }
    }
}

export const getProductsFromLocalStorage = (dispatch) => {
    let cart = localStorage.getItem('FullTimeForceTest');
    if (cart) {
        dispatch({type: 'cart/addProduct', payload: JSON.parse(cart)});
    }
}

export const deleteProduct = (id) => {
    return async (dispatch, getState) => {
        const cartState = getState().cart;
        const copyState = [...cartState];
        let products = copyState.filter(data => data.id !== id);
        await dispatch({type: 'cart/addProduct', payload: products});
        saveOnLocalStorage(products);
    }
}

export const emptyCart = (dispatch) => {
    localStorage.removeItem('FullTimeForceTest');
    dispatch({type: 'cart/empty'});
}

export let idFirebase;
export const finishBuy = (cart) => {
    return async (dispatch) => {
        await db.collection('cart').add({cart}).then(({id}) => idFirebase = id);
        await dispatch({type: 'cart/addProduct', payload: []});
        localStorage.removeItem('FullTimeForceTest');
    }
}