import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteProduct} from '../Middlewares/cartMdws';
import { DeleteOutlined } from '@ant-design/icons';

function DeleteButton({id}) {

    const dispatch = useDispatch();

    return <DeleteOutlined onClick={() => dispatch(deleteProduct(id))} style={{fontSize:20, color:'red'}}/>
}

export default DeleteButton;
