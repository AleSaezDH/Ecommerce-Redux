import React, { useState } from 'react';
import { Button, InputNumber } from 'antd';
import styles from '../styles/ButtonCounter.module.css';
import {useDispatch} from 'react-redux';

function ButtonCounter({productToBuy}) {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const handleBuy = () => {
        dispatch({type: 'sideCart/visibility', payload: true});
        productToBuy(quantity);
    }

    return (
        <div id={styles.divCounterContainer}>
        <InputNumber size="large" min={1} max={100000} defaultValue={1} onChange={(value) => setQuantity(value)}/>
        <Button size='large' type="primary" onClick={handleBuy}>Comprar</Button>
        </div>
    )
}

export default ButtonCounter
