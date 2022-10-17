import { ShoppingBag } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import {useCart} from 'react-use-cart'

const Nav = () => {
  const {totalUniqueItems, totalItems} = useCart()
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="nav container px-3 py-1">
        <a
          href="#"
          className="navbar navbar-brand text-decoration-none text-dark"
        >
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/' className="nav-link active" aria-current="page" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <Link to="/login" className="text-decoration-none px-3">
            Sign in
          </Link>
          |
          <Link to="/register" className="text-decoration-none px-3">
            Sign up
          </Link>
          <Link to='/checkoutpage' className="cart">
          <span className="text-decoration-none">{totalUniqueItems}</span>
          <ShoppingBag/>
          </Link>
        </div>  
      </div>
    </nav>
  );
};

export default Nav;
