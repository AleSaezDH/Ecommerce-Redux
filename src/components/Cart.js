import React from 'react';
import {useSelector} from 'react-redux';

function Cart() {

    const cartState = useSelector(state => state.cart);
    return (
        <div>
            <h1>Carro</h1>
        </div>
    )
}

export default Cart
