import React from 'react';
import {Link} from 'react-router-dom';

function HomeNavbar() {
    return (
        <ul>
        <Link to={`/categories/memory/ram/6`}>6 gb de memoria ram</Link><br />
        <Link to={`/categories/memory/internal/64`}>64 gb de memoria interna</Link><br />
        <Link to={`/categories/camera/main/16`}>16 px de resolucion de la camara</Link><br />
        <Link to={`/categories/protection/waterproof/yes`}>Resistente al agua</Link><br />
    </ul>
    )
}

export default HomeNavbar;
