import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <ul>
            <Link to={`/categories/colors`}>Despegable de colores</Link>
            <Link to={`/categories/memory`}>Despegable de memoria</Link>
            <Link to={`/categories/camera`}>Despegable de resolucion de la camara</Link>
            <Link to='/cart'>Carrito</Link>
        </ul>
    )
}

export default Navbar
