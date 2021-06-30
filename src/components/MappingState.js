import React from 'react';
import ProductCard from './ProductCard';
import styles from '../styles/MappingState.module.css';

function MappingState({products}) {
    return (
        <div id={styles.container}>
        {products.map((product) => {
            return product.results.map((data, index) => {
                return <>
                    <ProductCard key={index} data={data}/>
                </>
            });
        })}
        </div>
    )
}

export default MappingState
