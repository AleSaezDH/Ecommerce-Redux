import React from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import DeleteButton from './DeleteButton';
import EmptyCartButton from './EmptyCartButton';
import {useHistory} from 'react-router-dom';
import { Drawer, Button, Card, List } from 'antd';
import styles from '../styles/SideCart.module.css';

function SideCart() {

    const cartState = useSelector(state => state.cart, shallowEqual);
    const visibilitySideCart = useSelector(state => state.sideCart);
    const dispatch = useDispatch();
    const history = useHistory();
  
    const onClose = () => {
      dispatch({type: 'sideCart/visibility', payload: false});
    };

    const handleContinueButton = () => {
        onClose();
        history.push('/cart');
    }

    return (<>
        {(visibilitySideCart && cartState.length > 0) && <Drawer style={{display:'flex', justifyContent:'center'}} title="Cart" placement="right" closable={false} onClose={onClose} visible={visibilitySideCart} width={500} footer={
            <div>
              <EmptyCartButton />
              <Button type='primary' onClick={handleContinueButton} id={styles.continueButton}>Continue</Button>
            </div>
          }>
        <List itemLayout="horizontal" dataSource={cartState} renderItem={item => (
            <Card hoverable={false} bordered={false} id={styles.card}>
                <Card.Grid id={styles.cardGrid}>
                    <List.Item>
                        <List.Item.Meta
                            avatar={<img alt={item.name} src={item.picture} id={styles.drawerImage}/>}
                            title={item.name}
                            description={`Quantity: ${item.quantity}`}
                        />
                        <DeleteButton id={item.id}/>
                    </List.Item>
                </Card.Grid>
            </Card>
        )}/>
        </Drawer>}
        </>
    )
}

export default SideCart
