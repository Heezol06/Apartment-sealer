import React from 'react';
import { Form } from 'react-bootstrap';
import './SellHome.css'
const SellHome = () => {
    const handleOnBlur = () => {

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
                    <Form>
                        <input type="text" name="location" onBlur={handleOnBlur} className='border-0 my-4 input-style' style={{ backgroundColor: "#f0f0f0", padding: "10px", paddingRight: "150px" }} placeholder='Your Property Location' /> <br />
                        <input type="text" name="price" onBlur={handleOnBlur} className='border-0 my-4 input-style' style={{ backgroundColor: "#f0f0f0", padding: "10px", paddingRight: "150px" }} placeholder='Expected Price' /> <br />
                        <input type="text" name="bedRooms" onBlur={handleOnBlur} className='border-0 my-4 input-style' style={{ backgroundColor: "#f0f0f0", padding: "10px", paddingRight: "150px" }} placeholder='Number Of Bed Rooms' /> <br />
                        <input type="text" name="bathRooms" onBlur={handleOnBlur} className='border-0 my-4 input-style' style={{ backgroundColor: "#f0f0f0", padding: "10px", paddingRight: "150px" }} placeholder='Number Of Bath Rooms' /> <br />
                        <input type="text" name="propertyImg" onBlur={handleOnBlur} className='border-0 my-4 input-style' style={{ backgroundColor: "#f0f0f0", padding: "10px", paddingRight: "150px" }} placeholder='Your Property Image.' /> <br />
                        <input name="propertyImg" id="" cols="42" rows="10" onBlur={handleOnBlur} className='input-style' placeholder='Your Apartment Description Here ' style={{ backgroundColor: "#f0f0f0", border: "0", padding: "10px" }}></input> <br />
                        <input type="button" value="Submit" className='primary-btn-1 btn text-white px-5' />
                    </Form>

                </div>
            </div>
        </div>
    );
};

export default SellHome;