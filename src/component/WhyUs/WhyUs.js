import React from 'react';
import './WhyUs.css'

const WhyUs = () => {
    return (
        <div className='why-us'>
            <h1 className='text-decoration-underline py-5 '>WHY CHOOSE US</h1>
            <div className="container d-flex me-5 py-5">
                <div className="col-lg-4 text-light border-top me-4 active-color why-us-section">
                    <img src="https://i.ibb.co/QHhwxTS/house.png" style={{ width: "90px", margin: "30px" }} alt="" />
                    <div>
                        <h4>TRUSTED BY THOUSANDS</h4>
                        <p>10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</p>
                    </div>
                </div>
                <div className="col-lg-4 text-light border-top me-4 active-color why-us-section">
                    <img src="https://i.ibb.co/b7cKrNM/essay.png" style={{ width: "90px", margin: "30px" }} alt="" />
                    <div>
                        <h4>TRUSTED BY THOUSANDS</h4>
                        <p>10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</p>
                    </div>
                </div>
                <div className="col-lg-4 text-light border-top active-color why-us-section">
                    <img src="https://i.ibb.co/QHhwxTS/house.png" style={{ width: "90px", margin: "30px" }} alt="" />
                    <div>
                        <h4>TRUSTED BY THOUSANDS</h4>
                        <p>10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;