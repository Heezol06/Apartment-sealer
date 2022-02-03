import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link className='active-color text-decoration-none fs-3 me-4' to="/home">AS</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link className='active-color text-decoration-none me-4 fs-5' to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className='active-color text-decoration-none me-4 fs-5' to="/login">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link className='active-color text-decoration-none me-4 fs-5' to="/contactUs">Contact Us</Link>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn text-light" style={{ backgroundColor: "#FF6464" }} type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;