import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getAllProducts} from '../Middlewares/productsMdws';
import {addProduct, getProductsFromLocalStorage} from '../Middlewares/cartMdws';
import ButtonCounter from './ButtonCounter';
import SideCart from './SideCart';

function ProductDetail() {

    const products = useSelector(state => state.products, shallowEqual);
    const dispatch = useDispatch();
    const [product, setProduct] = useState({});
    const [showSideCart, setShowSideCart] = useState(false);
    const {id} = useParams();
    const limit = 100;
    const offset = 0;

    useEffect(async() => {
        await dispatch(getProductsFromLocalStorage);
        if (products.length !== 0) {
            products.filter(data => setProduct(data.results.find(x => x.id === id)));
        } else {
            dispatch(getAllProducts(offset, limit));
        }
    }, [products]);

    if(Object.keys(product).length === 0) {return <h1>Loading</h1>}

    const productToBuy = (quantity) => {
        setShowSideCart(true);
        const productData = {
            name: product.name,
            id: product.id,
            price: product.price,
            picture: product.pictures[0].url,
            quantity
        };
        dispatch(addProduct(productData));
    }

    return (
        <>
        <h1>{product.name}</h1>
        <h3>{product.price}</h3>
        {product.pictures.map((picture, index) => {
            return <img key={index} src={picture.url}/>
        })}
        <ButtonCounter productToBuy={productToBuy}/>
        {showSideCart && <SideCart />}
        </>
    )
}

export default ProductDetail
