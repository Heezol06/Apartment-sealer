import axios from "axios";
import React from "react";
import { useState } from "react";
import './SellHome.css'


const SellHome = () => {
    const [inputData, setInputData] = useState({})

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const nowInputData = { ...inputData };
        nowInputData[field] = value;
        setInputData(nowInputData)
        console.log(inputData);
    }

    const handleDataSubmit = e => {
        const newApartmentData = {
            location: inputData.location, price: inputData.price, bedRooms: inputData.bedRooms, bathRooms: inputData.bathRooms,
            img1: inputData.image, description: inputData.description
        }
        axios.post('https://still-ravine-04691.herokuapp.com/apartments', newApartmentData)
            .then(res => {
                if (res.data.insertedId) {
                    // e.location.reload();
                }

            })
        alert('Are You Sure You Want Upload This Data?');
    }
    return (
        <div>
            <h1 className='primary-color1 text-decoration-underline'>Wanna Sell Your Home?</h1>
            <div className='d-flex my-5'>
                <div className="col-lg-6">
                    <img src="https://i.ibb.co/TLKGfGS/form-pic.jpg" style={{ width: "80%" }} alt="" />
                </div>
                <div className="col-lg-5 py-5 shadow">
                    <h4>Description OF Your Property.</h4>
                    <form onSubmit={handleDataSubmit}>
                        <input type="text" name="location" onChange={handleOnChange} className='border-0 my-4 input-style' style={{ backgroundColor: "#f0f0f0", padding: "10px", paddingRight: "150px" }} placeholder='Your Property Location' /> <br />
                        <input type="text" name="price" onChange={handleOnChange} className='border-0 my-4 input-style' style={{ backgroundColor: "#f0f0f0", padding: "10px", paddingRight: "150px" }} placeholder='Expected Price' /> <br />
                        <input type="text" name="bedRooms" onChange={handleOnChange} className='border-0 my-4 input-style' style={{ backgroundColor: "#f0f0f0", padding: "10px", paddingRight: "150px" }} placeholder='Number Of Bed Rooms' /> <br />
                        <input type="text" name="bathRooms" onChange={handleOnChange} className='border-0 my-4 input-style' style={{ backgroundColor: "#f0f0f0", padding: "10px", paddingRight: "150px" }} placeholder='Number Of Bath Rooms' /> <br />
                        <input type="url" name="image" onChange={handleOnChange} className='border-0 my-4 input-style' style={{ backgroundColor: "#f0f0f0", padding: "10px", paddingRight: "150px" }} placeholder='Your Property Image.' /> <br />
                        <textarea type="text" name="description" onChange={handleOnChange} id="" cols="42" rows="10" className='input-style' placeholder='Your Apartment Description Here ' style={{ backgroundColor: "#f0f0f0", border: "0", padding: "10px" }}></textarea> <br />
                        <input type="submit" value="submit" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SellHome;