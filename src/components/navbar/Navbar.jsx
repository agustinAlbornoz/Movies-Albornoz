import React from 'react';
import CartWidget from './CartWidget';
import CartNumber from './CartNumber';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-light  border-bottom">
            <div className="container">
                <a className="navbar-brand" href="index.html">WAZOWSKI</a>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menuNavegacion">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="menuNavegacion" className="collapse navbar-collapse">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Peliculas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Series</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Generos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Accion</a></li>
                                <li><a className="dropdown-item" href="#">Aventuras</a></li>
                                <li><a className="dropdown-item" href="#">Ciencia Ficcion</a></li>
                                <li><a className="dropdown-item" href="#">Comedia</a></li>
                                <li><a className="dropdown-item" href="#">No-Ficcion</a></li>
                                <li><a className="dropdown-item" href="#">Drama</a></li>
                                <li><a className="dropdown-item" href="#">Fantasia</a></li>
                                <li><a className="dropdown-item" href="#">Musical</a></li>
                                <li><a className="dropdown-item" href="#">Suspenso</a></li>
                                <li><a className="dropdown-item" href="#">Terror</a></li>
                            </ul>
                        </li>
                        <li>
                            
                        </li>
                    </ul>
                    <form className="d-flex mx-2">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
                    <CartNumber cartNumber={3} >
                        <CartWidget/>
                    </CartNumber>
            </div>

        </nav>
    )
}
