import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ProductCard from './ProductCard';
import {getAllProducts, getCategory} from '../Middlewares';
import {useParams, Link} from 'react-router-dom';

function ProductsContainer() {

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const {category} = useParams();
    const {subcategory} = useParams();
    const {id} = useParams();

    console.log(products);

    useEffect(() => {
        if (category) {
            dispatch(getCategory(category, subcategory, id, page));
        } else {
            dispatch(getAllProducts(page));
        }
    }, [page, category, subcategory, id]);
    
    const handleBackButton = () => {
        setPage(page - 20);
    }

    const handleNextButton = () => {
        setPage(page + 20);
    }

    return (<>
        {products.map((product) => {
            return product.results.map((data, index) => {
                return <>
                    <ProductCard key={index} data={data}/>
                </>
            });
        })}
        {page >= 20 && <button onClick={handleBackButton}>Anterior</button>}
        {page < 80 && <button onClick={handleNextButton}>Siguiente</button>}
        </>
    )
}

export default ProductsContainer
