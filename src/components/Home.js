import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import home from '../images/home.png';
import {getAllProducts} from '../Middlewares/productsMdws';
import MappingState from './MappingState';
import {Link} from 'react-router-dom';
import HomeNavbar from './HomeNavbar';
import styles from '../styles/Home.module.css';
import { Typography } from 'antd';
const { Title } = Typography;

function Home() {

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const limit = 5;
    const offset = 0;

    useEffect(() => {
        dispatch(getAllProducts(offset, limit));
    }, []);

    return (
        <div>
            <img src={home} id={styles.logo}/>
            <div id={styles.divTitles}>
                <Title level={3} id={styles.bestSellers}>Best Sellers</Title>
                <Link to='/products'>All products</Link>
            </div>
            <MappingState products={products}/>
            <HomeNavbar />
            <a href='https://www.samsung.com/ar/' target='_blank' id={styles.samsungHref}>Visit Samsung oficial website</a>
        </div>
    )
}

export default Home
