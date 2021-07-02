import React from 'react';
import {useDispatch} from 'react-redux';
import {emptyCart} from '../Middlewares/cartMdws';
import { Button } from 'antd';

function EmptyCartButton() {
    const dispatch = useDispatch();

    return (
        <Button onClick={() => dispatch(emptyCart)}>Empty cart</Button>
    )
}

export default EmptyCartButton;
