import React from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import DeleteButton from './DeleteButton';
import EmptyCartButton from './EmptyCartButton';
import {useHistory} from 'react-router-dom';

function SideCart() {

    const cartState = useSelector(state => state.cart, shallowEqual);
    const history = useHistory();

    return (
        <>
        {cartState.map(product => {
            return <div key={product.id}>
                <h3>{product.name}</h3>
                <img src={product.picture}/>
                <p>{product.quantity}</p>
                <p>$ {product.price}</p>
                <DeleteButton id={product.id}/>
                <EmptyCartButton />
            </div>
        })}
        <button onClick={history.push('/cart')}>Continuar</button>
        </>
    )
}

export default SideCart
