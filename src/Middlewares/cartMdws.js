import {db} from '../firebase';

export const addProduct = (product) => {
    return async (dispatch, getState) => {
        const cartState = getState().cart;
        const copyState = [...cartState];
        let exist = copyState.find(data => data.id == product.id);
        if (exist) {
            let index = copyState.indexOf(exist);
            let copy = {...exist};
            copy.quantity = product.quantity + copy.quantity;
            copyState[index] = copy;
            dispatch({type: 'cart/addProduct', payload: copyState});
        } else {
            dispatch({type: 'cart/addProduct', payload: [...copyState, product]});
        }
        console.log(cartState);
    }
}