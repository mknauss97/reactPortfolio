import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    <nav className="navbar navbar-expand-lg justify-content-center ">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="d-flex" id="navbarText">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">About Me</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/projects">Projects</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Projects</Link>
                </li>
            </ul>

        </div>
    </nav>
}

export default Navbar;