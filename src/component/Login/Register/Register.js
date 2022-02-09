import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const navigate = useNavigate();
    const { user, registerUser, isLoading, error } = useAuth()
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData)
    }
    const handleRegisterSubmit = e => {
        if (registerData.password !== registerData.password2) {
            alert('Your password did not match');
            return
        }
        console.log(registerData);
        registerUser(registerData.name, registerData.email, registerData.password, navigate);

        e.preventDefault();
    }
    return (
        <div className='row login-bg'>
            <div className="col-lg-5 bg-light p-5 mx-5 rounded text-dark" style={{ marginTop: "150px", marginBottom: "150px" }}>
                <h1 className='text-start  display-6' style={{ color: "#1572A1", }}>Registration <span className='fw-bold' style={{ color: "#FF6464" }}>Info</span></h1>
                <Form onSubmit={handleRegisterSubmit}>
                    <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            onBlur={handleOnBlur}
                            placeholder="Enter email"
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            placeholder="Enter email"
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 w-100" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            placeholder="Password"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 w-100" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            placeholder="Confirm Your Password"
                        />
                    </Form.Group>
                    <button className="btn mb-4 border-0 text-light btn-grd" type="submit">Register</button>
                    <p style={{ color: "#9AD0EC" }}>Already Have An Account?</p>
                    <NavLink to='/login' style={{ textDecoration: "none" }}><h6 style={{ color: "#1572A1", }}>login</h6></NavLink>
                </Form>
            </div>
        </div>
    );
};

export default Register;