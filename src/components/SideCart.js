import React from 'react';
import {useSelector} from 'react-redux';
import DeleteButton from './DeleteButton';
import EmptyCartButton from './EmptyCartButton';

function SideCart() {

    const cartState = useSelector(state => state.cart);

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
        </>
    )
}

export default SideCart
