import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useAuth from './../../Hooks/useAuth';

const BookingApartment = () => {

    const { user } = useAuth()
    const [apartmentDetails, setApartmentDetails] = useState([])
    const initialInfo = { userName: user.displayName, email: user.email, location: apartmentDetails.location, price: apartmentDetails.price }
    const [inputData, setInputData] = useState(initialInfo)
    const { apartmentId } = useParams()


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const nowInputData = { ...inputData };
        nowInputData[field] = value;
        setInputData(nowInputData)
    }

    const handleDataSubmit = e => {
        const orderData = { ...inputData }
        console.log(orderData);
        fetch('http://localhost:7000/addOrderInfo', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(result => console.log(result))
        window.confirm('Are you sure you want to order')
        window.location.reload()

        e.preventDefault()
    }

    useEffect(() => {
        fetch(`http://localhost:7000/apartments/${apartmentId}`)
            .then(res => res.json())
            .then(data => setApartmentDetails(data))
    }, [])
    return (
        <>
            <h4 className='primary-color1 text-decoration-underline'>Check Apartments Details And Place Your Order. </h4>
            <div className='d-flex my-5'>
                <div className='col-lg-6 mx-auto'>
                    <div class="card mb-3">
                        <img src={apartmentDetails.img1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title"><span className='primary-color1 fw-bold'>Location: </span>{apartmentDetails.location}</h5>
                            <p class="card-text"><span className='primary-color1 fw-bold'>About Our Apartment: </span> {apartmentDetails.description}</p>
                            <p class="card-text"><span className='primary-color1 fw-bold'>Price: </span> {apartmentDetails.price}</p>
                            <p class="card-text"><small class="text-muted">{apartmentDetails.location}</small></p>
                        </div>
                    </div>
                </div>
                <div className='mx-auto shadow-lg rounded pt-5'>
                    <h4 className='text-decoration-underline' style={{ color: "#1572A1" }}>Your Order Information.</h4>
                    <form onSubmit={handleDataSubmit} className="p-3">
                        <input type="text" onChange={handleOnChange} defaultValue={user.displayName} className='border-0 my-4 input-style' style={{ backgroundColor: "#f0f0f0", padding: "10px", paddingRight: "150px" }} placeholder='Your Property Location' /> <br />
                        <input type="text" onChange={handleOnChange} defaultValue={user.email} className='border-0 my-4 input-style' style={{ backgroundColor: "#f0f0f0", padding: "10px", paddingRight: "150px" }} placeholder='Your Property Location' /> <br />
                        <input type="text" name="location" onChange={handleOnChange} defaultValue={apartmentDetails.location} className='border-0 my-4 input-style' style={{ backgroundColor: "#f0f0f0", padding: "10px", paddingRight: "150px" }} placeholder='Your Property Location' /> <br />
                        <input type="text" name="price" onChange={handleOnChange} defaultValue={apartmentDetails.price} className='border-0 my-4 input-style' style={{ backgroundColor: "#f0f0f0", padding: "10px", paddingRight: "150px" }} placeholder='Expected Price' /> <br />
                        <input type="submit" className='primary-btn-1 border px-3 p-2' value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingApartment;