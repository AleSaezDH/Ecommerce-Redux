import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAllProducts, getCategory} from '../Middlewares/productsMdws';
import {useParams} from 'react-router-dom';
import MappingState from './MappingState';
import styles from '../styles/ProductsContainer.module.css';
import { Button } from 'antd';

function ProductsContainer() {

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const {category} = useParams();
    const {subcategory} = useParams();
    const {id} = useParams();
    const [offset, setOffset] = useState(0);
    const limit = 20;

    useEffect(() => {
        dispatch({type: 'loading/switch', payload: true});
        if (category) {
            dispatch(getCategory(category, subcategory, id));
        } else {
            dispatch(getAllProducts(offset, limit));
        }
        // eslint-disable-next-line
    }, [offset, subcategory, id]);
    
    const handleBackButton = () => {
        setOffset(offset - 20);
    }

    const handleNextButton = () => {
        setOffset(offset + 20);
    }

    return (<div id={styles.productsDiv}>
        <MappingState products={products}/>
        {(!subcategory && products.length > 0) && <div id={styles.paginationButtons}>
            {offset >= 20 && <Button type="primary" onClick={handleBackButton}>Previous</Button>}
            {offset < 80 && <Button type="primary" onClick={handleNextButton}>Next</Button>}
        </div>}
        </div>
    )
}

export default ProductsContainer
