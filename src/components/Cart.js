import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import EmptyCartButton from './EmptyCartButton';
import {finishBuy, getProductsFromLocalStorage, deleteProduct} from '../Middlewares/cartMdws';
import {useHistory} from 'react-router-dom';
import styles from '../styles/Cart.module.css';
import { List, Button, Typography } from 'antd';
const { Title } = Typography;

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

    const amount = cartState.map(value => value.price * value.quantity);
    const total = amount.reduce((firstValue, secondValue) => {
        return firstValue + secondValue;
    }, 0);

    return (
        <List itemLayout="horizontal" dataSource={cartState} id={styles.list}
        footer={
            <div id={styles.footer}>
                <Title level={4}>Total: ${total}</Title>
                {cartState.length > 0 && <div><EmptyCartButton /> <Button type="primary" onClick={handleClick}>Terminar compra</Button></div>}
            </div>
            }
        renderItem={item => (
            <List.Item id={styles.listItem}>
                <List.Item.Meta
                    avatar={<img src={item.picture} id={styles.cartImage}/>}
                    title={item.name}
                    description={<div><p>Quantity: {item.quantity}</p> <p>Price: ${item.price}</p></div>}
                />
                <Button onClick={() => dispatch(deleteProduct(item.id))} id={item.id}>Delete</Button>
            </List.Item>
        )}
        />
    )
}

export default Cart
