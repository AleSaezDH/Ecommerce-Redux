import React from 'react';
import ButtonCounter from './ButtonCounter';
import {Link} from 'react-router-dom';

function ProductCard({data}) {

    return (<>
        <h1>{data.name}</h1>
        <img src={data.pictures[0].url} width={100}/>
        <br />
        <p>$ {data.price}</p>
        <Link to={`/products/${data.id}`}>Ver más</Link>
        </>
    )
}

export default ProductCard;
