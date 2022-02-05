import React from 'react';
import Apartments from '../Apartments/Apartments';
import BuySellBanner from '../BuySellBanner/BuySellBanner';
import WhyUs from '../WhyUs/WhyUs';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://i.ibb.co/551s2zk/nastuh-abootalebi-y-Wwob8kw-OCk-unsplash.jpg" class="d-block w-100 img-style" style={{ height: "700px" }} alt="..." />
                        <div class="carousel-caption ">
                            <div className='container bg-white rounded d-flex justify-content-between p-4' style={{ color: "#1f6f8b" }}>
                                <div>
                                    <img src="https://i.ibb.co/pf9WRq8/home.png" style={{ height: "50px", width: "50px" }} alt="" />
                                    <h2>HOUSE</h2>
                                </div>
                                <div>
                                    <img src="https://i.ibb.co/Jsgnw28/apartment.png" style={{ height: "50px", width: "50px" }} alt="" />
                                    <h2>BUILDING</h2>
                                </div>
                                <div>
                                    <img src="https://i.ibb.co/j6yMHbt/apartments.png" style={{ height: "50px", width: "50px" }} alt="" />
                                    <h2>APARTMENT</h2>
                                </div>
                                <div>
                                    <img src="https://i.ibb.co/QrJjtQx/hut.png" style={{ height: "50px", width: "50px" }} alt="" />
                                    <h2>HUT</h2>
                                </div>
                                <div>
                                    <img src="https://i.ibb.co/TRbJCjq/castle.png" style={{ height: "50px", width: "50px" }} alt="" />
                                    <h2>CASTLE</h2>
                                </div>
                            </div>
                            <div>
                                <h2>FIND A PERFECT DREAM HOUSE</h2>
                                <h6>You Can Buy & Sale Your House From Here.</h6>
                                <p>Here You Can Find All Kind Of House</p>
                                <p className="carousel-text">View All Property <i class="fas fa-long-arrow-alt-right"></i></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.ibb.co/vL6QtHC/deborah-cortelazzi-g-REqu-CUXQLI-unsplash.jpg" class="d-block w-100 img-style" style={{ height: "700px" }} alt="..." />
                        <div class="carousel-caption ">
                            <div className='container bg-white rounded d-flex justify-content-between p-4' style={{ color: "#1f6f8b" }}>
                                <div>
                                    <img src="https://i.ibb.co/pf9WRq8/home.png" style={{ height: "50px", width: "50px" }} alt="" />
                                    <h2>HOUSE</h2>
                                </div>
                                <div>
                                    <img src="https://i.ibb.co/Jsgnw28/apartment.png" style={{ height: "50px", width: "50px" }} alt="" />
                                    <h2>BUILDING</h2>
                                </div>
                                <div>
                                    <img src="https://i.ibb.co/j6yMHbt/apartments.png" style={{ height: "50px", width: "50px" }} alt="" />
                                    <h2>APARTMENT</h2>
                                </div>
                                <div>
                                    <img src="https://i.ibb.co/QrJjtQx/hut.png" style={{ height: "50px", width: "50px" }} alt="" />
                                    <h2>HUT</h2>
                                </div>
                                <div>
                                    <img src="https://i.ibb.co/TRbJCjq/castle.png" style={{ height: "50px", width: "50px" }} alt="" />
                                    <h2>CASTLE</h2>
                                </div>
                            </div>
                            <h2>FIND A PERFECT DREAM HOUSE</h2>
                            <h6>You Can Buy & Sale Your House From Here.</h6>
                            <p>Here You Can Find All Kind Of House</p>
                            <p className="carousel-text">View All Property <i class="fas fa-long-arrow-alt-right"></i></p>
                        </div>
                    </div>
                    <div class="carousel-item"> <img src="https://i.ibb.co/D7LfVVg/luke-van-zyl-ko-H7-IVuw-RLw-unsplash.jpg" class="d-block w-100 img-style" style={{ height: "700px", }} alt="..." />
                        <div class="carousel-caption">
                            <div className='container bg-white rounded d-flex justify-content-between p-4 ' style={{ color: "#1f6f8b" }}>
                                <div>
                                    <img src="https://i.ibb.co/pf9WRq8/home.png" style={{ height: "50px", width: "50px" }} alt="" />
                                    <h2>HOUSE</h2>
                                </div>
                                <div>
                                    <img src="https://i.ibb.co/Jsgnw28/apartment.png" style={{ height: "50px", width: "50px" }} alt="" />
                                    <h2>BUILDING</h2>
                                </div>
                                <div>
                                    <img src="https://i.ibb.co/j6yMHbt/apartments.png" style={{ height: "50px", width: "50px" }} alt="" />
                                    <h2>APARTMENT</h2>
                                </div>
                                <div>
                                    <img src="https://i.ibb.co/QrJjtQx/hut.png" style={{ height: "50px", width: "50px" }} alt="" />
                                    <h2>HUT</h2>
                                </div>
                                <div>
                                    <img src="https://i.ibb.co/TRbJCjq/castle.png" style={{ height: "50px", width: "50px" }} alt="" />
                                    <h2>CASTLE</h2>
                                </div>
                            </div>
                            <h2>FIND A PERFECT DREAM HOUSE</h2>
                            <h6>You Can Buy & Sale Your House From Here.</h6>
                            <p>Here You Can Find All Kind Of House</p>
                            <p className="carousel-text">View All Property <i class="fas fa-long-arrow-alt-right"></i></p>
                        </div>
                    </div>
                </div>
            </div>
            <BuySellBanner></BuySellBanner>
            <Apartments></Apartments>
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;