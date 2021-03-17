import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import ReorderIcon from '@material-ui/icons/Reorder';
import CloseIcon from '@material-ui/icons/Close';

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        shoe
          </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
              </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/About"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                About
              </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/Abc"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Abc
              </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/Products"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Products
              </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        {click ? <CloseIcon /> : <ReorderIcon />}
                        {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;