import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {idFirebase} from '../Middlewares/cartMdws';

function ConditionalRoute ({component: Component, ...props}) {

    const cart = useSelector(state => state.cart);

    return <Route {...props} render={props => {return (cart.length > 0 || idFirebase) ? <Component {...props}/> : <Redirect to='/' />}}/>
}

export default ConditionalRoute;