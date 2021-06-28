import React from 'react';
import { Redirect, Route } from 'react-router';
import {idFirebase} from '../Middlewares/cartMdws';

function ConditionalRoute ({component: Component, ...props}) {

    return <Route {...props} render={props => {return idFirebase ? <Component {...props}/> : <Redirect to='/' />}}/>
}

export default ConditionalRoute;