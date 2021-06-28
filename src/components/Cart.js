import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import DeleteButton from './DeleteButton';
import EmptyCartButton from './EmptyCartButton';
import {finishBuy, getProductsFromLocalStorage} from '../Middlewares/cartMdws';
import {useHistory} from 'react-router-dom';

function Cart() {

    const cartState = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getProductsFromLocalStorage);
    }, []);

    const handleClick = () => {
        dispatch(finishBuy(cartState));
        history.push('/checkout');
    }
    return (
        <div>
            <h1>Carro</h1>
            {cartState.map(product => {
                return <div ket={product.id}>
                    <h2>{product.name}</h2>
                    <img src={product.picture}/>
                    <p>{product.quantity}</p>
                    <p>$ {product.price}</p>
                    <DeleteButton id={product.id}/>
                </div>
            })}
            {cartState.length > 0 && <><EmptyCartButton /> <button onClick={handleClick}>Terminar compra</button></>}
        </div>
    )
}

export default Cart
