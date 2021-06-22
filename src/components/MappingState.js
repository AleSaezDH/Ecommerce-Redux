import React from 'react';
import ProductCard from './ProductCard';

function MappingState({products}) {
    return (
        <>
        {products.map((product) => {
            return product.results.map((data, index) => {
                return <>
                    <ProductCard key={index} data={data}/>
                </>
            });
        })}
        </>
    )
}

export default MappingState
