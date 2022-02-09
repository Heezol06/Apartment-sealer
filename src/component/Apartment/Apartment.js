import React from 'react';
import './Apartment.css'
const Apartment = ({ apartment }) => {
    const { img1, location, price, bads, baths } = apartment
    return (
        <div className="col-lg-4 mx-auto" style={{ backgroundColor: "#D6E5FA", width: "350px", marginRight: "20px", height: "330px", marginBottom: "30px", borderRadius: "10px" }}>
            <div className='position-relative mt-3 '>
                <img src={img1} className='apartment-img' style={{ width: "300px", borderRadius: "7px" }} alt="" />
                <span className="position-absolute top-0 start-75 translate-middle badge rounded-pill bg-danger">
                    -10%
                </span>
                <div className='overlay d-flex align-items-center justify-content-between'>
                    <h4 className='text '>ADD TO CART </h4>
                    <i className="ms-5 fas fa-plus"></i>
                </div>
            </div>
            <div className='d-flex justify-content-around'>
                <h6>{location}</h6>
                <p className="text-danger fw-bold">{price}</p>
            </div>
            <div className='d-flex justify-content-around'>
                <div className='d-flex align-items-center '>
                    <p> <i className="fas fa-bed"></i> {bads}Beds</p>
                </div>
                <div className='d-flex align-items-center'>
                    <p> <i className="fas fa-bath"></i> {baths}Baths</p>
                </div>
            </div>
        </div>
    );
};

export default Apartment;