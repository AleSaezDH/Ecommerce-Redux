import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';

function Navbar() {
    return (
        <ul>
            <Link to='/'><img src={logo}/></Link>
            <Link to={`/categories/memory/ram/2`}>2 gb de memoria ram</Link><br />
            <Link to={`/categories/memory/ram/3`}>3 gb de memoria ram</Link><br />
            <Link to={`/categories/memory/ram/4`}>4 gb de memoria ram</Link><br />
            <Link to={`/categories/memory/ram/6`}>6 gb de memoria ram</Link><br />
            <Link to={`/categories/memory/internal/32`}>32 gb de memoria interna</Link><br />
            <Link to={`/categories/memory/internal/64`}>64 gb de memoria interna</Link><br />
            <Link to={`/categories/camera/main/13`}>13 px de resolucion de la camara</Link><br />
            <Link to={`/categories/camera/main/16`}>16 px de resolucion de la camara</Link><br />
            <Link to={`/categories/protection/waterproof/yes`}>Resistente al agua</Link><br />
            <Link to='/cart'>Carrito</Link><br />
            <Link to='/products'>Productos</Link>
        </ul>
    )
}

export default Navbar
