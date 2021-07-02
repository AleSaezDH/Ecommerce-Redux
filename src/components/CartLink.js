import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {getProductsFromLocalStorage} from '../Middlewares/cartMdws';
import { Badge } from 'antd';

function CartLink() {

    const cartState = useSelector(state => state.cart, shallowEqual);
    const [totalQuantity, setTotalQuantity] = useState(0);

    useDispatch(getProductsFromLocalStorage);

    useEffect(() => {
        if (cartState.length !== 0) {
            let productsQuantity = cartState.map(product => product.quantity);
            let total = productsQuantity.reduce((firstValue, secondValue) => {
                return firstValue + secondValue;
            }, 0);
            setTotalQuantity(total);
        } else {
            setTotalQuantity(0);
        }
    }, [cartState]);

    return <>
    {totalQuantity > 0 ? <Link to='/cart'><Badge count={totalQuantity} offset={[12]}>Cart</Badge></Link> : <Link to='/cart'>Cart</Link>}
    </>
}

export default CartLink
