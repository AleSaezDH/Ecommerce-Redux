import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteProduct} from '../Middlewares/cartMdws';

function DeleteButton({id}) {

    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(deleteProduct(id))}>Eliminar</button>
    )
}

export default DeleteButton;
