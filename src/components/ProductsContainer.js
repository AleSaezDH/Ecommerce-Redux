import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAllProducts, getCategory} from '../Middlewares/productsMdws';
import {useParams, Link} from 'react-router-dom';
import MappingState from './MappingState';

function ProductsContainer() {

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const {category} = useParams();
    const {subcategory} = useParams();
    const {id} = useParams();
    const [offset, setOffset] = useState(0);
    const limit = 20;

    useEffect(() => {
        if (category) {
            dispatch(getCategory(category, subcategory, id));
        } else {
            dispatch(getAllProducts(offset, limit));
        }
    }, [offset, subcategory, id]);
    
    const handleBackButton = () => {
        setOffset(offset - 20);
    }

    const handleNextButton = () => {
        setOffset(offset + 20);
    }

    return (<>
        <MappingState products={products}/>
        {offset >= 20 && <button onClick={handleBackButton}>Anterior</button>}
        {offset < 80 && <button onClick={handleNextButton}>Siguiente</button>}
        </>
    )
}

export default ProductsContainer
