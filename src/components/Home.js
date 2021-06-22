import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import home from '../images/home.png';
import {getAllProducts} from '../Middlewares/productsMdws';
import MappingState from './MappingState';
import {Link} from 'react-router-dom';
import HomeNavbar from './HomeNavbar';

function Home() {

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const limit = 4;
    const offset = 0;

    useEffect(() => {
        dispatch(getAllProducts(offset, limit));
    }, []);

    return (
        <div>
            <img src={home}/>
            <h3>Best sellers</h3>
            <MappingState products={products}/>
            <Link to='/products'>View all</Link>
            <HomeNavbar />
            <a href='https://www.samsung.com/ar/' target='_blank'>Samsung oficial website</a>
        </div>
    )
}

export default Home
