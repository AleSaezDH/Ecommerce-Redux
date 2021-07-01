import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getAllProducts} from '../Middlewares/productsMdws';
import {addProduct, getProductsFromLocalStorage} from '../Middlewares/cartMdws';
import ButtonCounter from './ButtonCounter';
import SideCart from './SideCart';
import styles from '../styles/ProductDetail.module.css';
import { Typography, Descriptions  } from 'antd';
const { Title } = Typography;

function ProductDetail() {

    const products = useSelector(state => state.products, shallowEqual);
    const dispatch = useDispatch();
    const [product, setProduct] = useState([]);
    const {id} = useParams();
    const limit = 100;
    const offset = 0;

    useEffect(() => {
        dispatch(getProductsFromLocalStorage);
        if (products.length !== 0) {
            products.filter(data => setProduct(data.results.find(x => x.id === id)));
        } else {
            dispatch(getAllProducts(offset, limit));
        }
    }, [products]);
    
    if(product.length === 0) {return <h1>Loading</h1>}

    const productToBuy = (quantity) => {
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
        <div id={styles.divContainer}>
        <Title level={3} id={styles.title}>{product.name}</Title>
        <div id={styles.imagesAndCounter}>
            {product.pictures.map((picture, index) => {
                return <div>
                    <img key={index} src={picture.url} id={styles.images}/>
                </div>
            })}
            <div>
                <h3>$ {product.price}</h3>
                <ButtonCounter productToBuy={productToBuy}/>
            </div>
        </div>
        <Descriptions bordered >
            {product.attributes.map(data => {
                return <Descriptions.Item span={2} label={data.name}>{data.value_name}</Descriptions.Item>
            })}
        </Descriptions>
        <SideCart />
        </div>
    )
}

export default ProductDetail
