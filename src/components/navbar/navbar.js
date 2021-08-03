import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg justify-content-center display-inline-block">
          <div className="empty" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="link" to="/">About Me</Link>
              </li>
              <li className="nav-item">
                <Link className="link" to="/projects">Projects</Link>
              </li>
            </ul>
          </div>
        
      </nav>
          )
      }

export default Navbar;