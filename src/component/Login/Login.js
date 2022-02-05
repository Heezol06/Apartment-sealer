import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Login.css'
import { Form } from 'react-bootstrap';
import useAuth from './../../Hooks/useAuth';
import { useLocation } from 'react-router-dom';

const Login = () => {
    const { signUsingGoogle, loginUser } = useAuth()
    const [loginData, SetLoginData] = useState({})

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        SetLoginData(newLoginData)
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate)
        console.log(loginUser);
        e.preventDefault()
    }

    const handleGoogleSignIn = () => {
        signUsingGoogle(navigate, location)
    }
    return (
        <div className='row login-bg'>
            <div className="col-lg-5 bg-light p-5 mx-5 rounded text-dark" style={{ marginTop: "150px", marginBottom: "150px" }}>
                <h3 className='display-6' style={{ color: "#1572A1" }}>Welcome To <span className='fw-bold' style={{ color: "#FF6464" }}>Apartment Seals</span> Official Site.</h3>
                <Form onSubmit={handleLoginSubmit} class=" mb-3">
                    <input type="Email" name="email" onChange={handleOnChange} class="form-control mb-3" placeholder="Email" aria-label="Example text with button addon" aria-describedby="button-addon1" />

                    <input type="Password" name="password" onChange={handleOnChange} class="form-control mb-3" placeholder="Password" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                    <br />
                    <button class="btn mb-4 border-0 text-light btn-grd" type="submit">Login</button>
                    <div>
                        <button onClick={handleGoogleSignIn} className='btn btn-light'><img src="https://i.ibb.co/Y8244HJ/google-1.png" style={{ width: "40px", }} className='' alt="" srcset="" /></button>
                    </div>
                    <p style={{ color: "#9AD0EC" }}>Don't have any account?</p>
                    <NavLink to='/register' style={{ textDecoration: "none" }}><h6 style={{ color: "#1572A1", }}>Register</h6></NavLink>
                </Form>
            </div>
        </div>
    );
};

export default Login;