import React from 'react';
import ProductCard from './ProductCard';
import styles from '../styles/MappingState.module.css';
import {useSelector} from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';

function MappingState({products}) {

    const loading = useSelector(state => state.loading);

    return (<>
        {!loading ? <div id={styles.container}>
        {products.map((product) => {
            return product.results.map((data, index) => {
                return <>
                    <ProductCard key={index} data={data}/>
                </>
            });
        })}
        </div>
        :
        <div id={styles.loading}>
            <LoadingOutlined />
        </div>}
        </>
    )
}

export default MappingState
