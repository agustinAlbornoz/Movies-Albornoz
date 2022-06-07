import React, { useContext } from 'react';
import CartWidget from './CartWidget';
import CartNumber from './CartNumber';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../GlobalContext/GlobalContext';

export default function Navbar() {
    const { carrito } = useContext(GlobalContext)
    return (
        <nav className="navbar navbar-expand-md navbar-light  border-bottom">
            <div className="container">
                <a className="navbar-brand" href="/">WAZOWSKI</a>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menuNavegacion">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="menuNavegacion" className="collapse navbar-collapse">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Generos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                                <li><Link to={`/category/Action`} className=""><a class="dropdown-item" href="#">Action</a></Link></li>
                                <li><Link to={`/category/Comedy`} className=""><a class="dropdown-item" href="#">Comedy</a></Link></li>
                                <li><Link to={`/category/Crime`} className=""><a class="dropdown-item" href="#">Crime</a></Link></li>
                                <li><Link to={`/category/Drama`} className=""><a class="dropdown-item" href="#">Drama</a></Link></li>
                                <li><Link to={`/category/History`} className=""><a class="dropdown-item" href="#">History</a></Link></li>
                                <li><Link to={`/category/Romance`} className=""><a class="dropdown-item" href="#">Romance</a></Link></li>

                            </ul>
                        </li>
                    </ul>
                    <div className="iconCart">
                        <CartNumber cartNumber={carrito.length} >
                            <CartWidget />
                        </CartNumber>
                    </div>

                </div>


            </div>

        </nav>
    )
}
