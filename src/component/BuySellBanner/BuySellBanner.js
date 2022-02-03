import React from 'react';
import './BuySellBanner.css'
import { Link } from 'react-router-dom';
const BuySellBanner = () => {
    return (
        <div className='banner-bg my-5'>
            <div className=" g-4 d-flex p-5  justify-content-center">
                <div className="col-lg-5 d-flex  p-5 rounded my-4 mx-4 bg-success text-light opacity-style">
                    <div>
                        <img src="https://i.ibb.co/6ZgKTvp/statistics.png" className='text-light' style={{ width: "80px" }} alt="" />
                    </div>
                    <div>
                        <Link className='text-light' to="/buyHome"><h3 className='text-light '>Looking For The New Home?</h3></Link>
                        <p>10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</p>
                    </div>
                </div>
                <div className="col-lg-5 d-flex p-5 rounded my-4 mx-4 bg-danger opacity-style">
                    <div>
                        <img src="https://i.ibb.co/PjmCXyW/sell.png" style={{ width: "80px" }} alt="" />
                    </div>
                    <div>
                        <Link className='text-dark' to="/sellHome"><h3 className='text-dark'>Want To Sell Your Home?</h3></Link>
                        <p>10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuySellBanner;