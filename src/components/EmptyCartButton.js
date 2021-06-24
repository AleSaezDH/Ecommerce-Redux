import React from 'react';
import {useDispatch} from 'react-redux';
import {emptyCart} from '../Middlewares/cartMdws';

function EmptyCartButton() {
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(emptyCart)}>Vaciar carrito</button>
    )
}

export default EmptyCartButton;
