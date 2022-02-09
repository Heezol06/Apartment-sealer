import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import useAuth from './../../Hooks/useAuth';
const Navbar = () => {
    const { logout, user } = useAuth()
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className='active-color text-decoration-none fs-3 me-4' to="/home">AS</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className='active-color text-decoration-none me-4 fs-5' to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='active-color text-decoration-none me-4 fs-5' to="/contactUs">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='active-color text-decoration-none me-4 fs-5' to="/apartments">Apartments</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='active-color text-decoration-none me-4 fs-5' to="/myOrder">Orders</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn text-light me-3" style={{ backgroundColor: "#FF6464" }} type="submit">Search</button>

                        {user.email ?
                            <div className='d-flex align-items-center justify-content-center'>
                                <button className="btn text-light btn-danger" onClick={logout} type="submit"><i className="fas fa-sign-out-alt"></i></button>
                                <p className='mb-0 primary-color1'>Logout</p>
                            </div> :
                            <Link to="/login"><button className='primary-btn-1 p-2 px-4 border-0'>Login</button></Link>}
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;