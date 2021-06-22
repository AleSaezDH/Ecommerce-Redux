import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getAllProducts} from '../Middlewares';
import ButtonCounter from './ButtonCounter';

function ProductDetail() {

    const products = useSelector(state => state.products, shallowEqual);
    const dispatch = useDispatch();
    const [product, setProduct] = useState({});
    const {id} = useParams();
    const limit = 100;
    const offset = 0;
    
    useEffect(() => {
        if (products.length !== 0) {
            products.filter(data => setProduct(data.results.find(x => x.id === id)));
        } else {
            dispatch(getAllProducts(offset, limit));
        }
    }, [products]);

    if(Object.keys(product).length === 0) {return <h1>Loading</h1>}

    const productToBuy = (value) => {

    }

    return (
        <>
        <h1>{product.name}</h1>
        <h3>{product.price}</h3>
        {product.pictures.map((picture, index) => {
            return <img key={index} src={picture.url}/>
        })}
        <ButtonCounter productToBuy={productToBuy}/>
        </>
    )
}

export default ProductDetail
