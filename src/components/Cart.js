import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import EmptyCartButton from './EmptyCartButton';
import {finishBuy, getProductsFromLocalStorage, deleteProduct} from '../Middlewares/cartMdws';
import {useHistory, Link} from 'react-router-dom';
import styles from '../styles/Cart.module.css';
import { List, Button, Typography, Result } from 'antd';
const { Title } = Typography;

function Cart() {

    const cartState = useSelector(state => state.cart);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsFromLocalStorage);
        // eslint-disable-next-line
    }, []);

    const handleClick = () => {
        history.push('/checkout');
        dispatch(finishBuy(cartState));
    }

    const amount = cartState.map(value => value.price * value.quantity);
    const total = amount.reduce((firstValue, secondValue) => {
        return firstValue + secondValue;
    }, 0);

    return (<>
        {cartState.length > 0 ? <List itemLayout="horizontal" dataSource={cartState} id={styles.list}
        footer={
            <div id={styles.footer}>
                <Title level={4}>Total: ${total}</Title>
                <div><EmptyCartButton /> <Button type="primary" onClick={handleClick}>Continue</Button></div>
            </div>
            }
        renderItem={item => (
            <List.Item id={styles.listItem}>
                <List.Item.Meta
                    avatar={<img alt={item.name} src={item.picture} id={styles.cartImage}/>}
                    title={item.name}
                    description={<div><p>Quantity: {item.quantity}</p> <p>Price: ${item.price}</p></div>}
                />
                <Button onClick={() => dispatch(deleteProduct(item.id))} id={item.id}>Delete</Button>
            </List.Item>
        )}
        />
        :
        <Result style={{marginTop:50}} title="Your cart is empty" extra={<Button type="primary" key="console"><Link to='/products'>All products</Link></Button>}/>}
        </>
    )
}

export default Cart
