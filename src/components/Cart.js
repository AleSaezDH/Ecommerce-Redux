import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import DeleteButton from './DeleteButton';
import EmptyCartButton from './EmptyCartButton';
import {finishBuy, getProductsFromLocalStorage} from '../Middlewares/cartMdws';
import {useHistory} from 'react-router-dom';
import { List, Avatar, Space } from 'antd';

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
        <List itemLayout="vertical" size="large" dataSource={cartState}
        footer={
        <div>
            {cartState.length > 0 && <><EmptyCartButton /> <button onClick={handleClick}>Terminar compra</button></>}
        </div>
        }
        renderItem={item => (
            <List.Item key={item.id}
                actions={[ <DeleteButton id={item.id}/> ]}
                extra={<img width={272} src={item.picture} />} >
                    <List.Item.Meta title={item.name} description={`Cantidad: ${item.quantity}`} />
                {`$ ${item.price}`}
            </List.Item>
        )} />
    )
}

export default Cart
