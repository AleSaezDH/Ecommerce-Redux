import React from 'react';
import {idFirebase} from '../Middlewares/cartMdws';
import { Result, Button } from 'antd';
import {Link} from 'react-router-dom';

function Checkout() {
    return (
        <Result
    status="success"
    title="Thank you! Successfully Purchased"
    subTitle={`Order number: ${idFirebase}`}
    extra={[
      <Button type="primary" key="console"><Link to='/'>Go Home</Link></Button>
    ]}
  />
    )
}

export default Checkout
