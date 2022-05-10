import React from 'react';
import CartWidget from './CartWidget';
import CartNumber from './CartNumber';
import { Link } from 'react-router-dom';

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
                                <li><Link to={`/category/28`} className="btn btn-warning">Action</Link></li>
                                <li><Link to={`/category/12}`} className="btn btn-warning">Adventure</Link></li>
                                <li><Link to={`/category/16`} className="btn btn-warning">Animation</Link></li>
                                <li><Link to={`/category/35`} className="btn btn-warning">Comedy</Link></li>
                                <li><Link to={`/category/80`} className="btn btn-warning">Crime</Link></li>
                                <li><Link to={`/category/99`} className="btn btn-warning">Documentary</Link></li>
                                <li><Link to={`/category/18`} className="btn btn-warning">Drama</Link></li>
                                <li><Link to={`/category/14`} className="btn btn-warning">Fantasy</Link></li>
                                <li><Link to={`/category/36`} className="btn btn-warning">History</Link></li>
                                <li><Link to={`/category/27`} className="btn btn-warning">Horror</Link></li>
                                <li><Link to={`/category/10402`} className="btn btn-warning">Music</Link></li>
                                <li><Link to={`/category/9648`} className="btn btn-warning">Mystery</Link></li>
                                <li><Link to={`/category/10749`} className="btn btn-warning">Romance</Link></li>
                                <li><Link to={`/category/878`} className="btn btn-warning">Science Fiction</Link></li>
                                <li><Link to={`/category/53`} className="btn btn-warning">Thriller</Link></li>
                                <li><Link to={`/category/10752`} className="btn btn-warning">War</Link></li>
                                <li><Link to={`/category/37`} className="btn btn-warning">Western</Link></li>
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
