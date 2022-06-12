import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import './ContactUs.css'


mapboxgl.accessToken = 'pk.eyJ1IjoiaGVlem9sIiwiYSI6ImNrejdjczdodDBrZjIyb245a2JxbnIycTYifQ.JKEKh4Egu78s711OPSAAlA';

export const ContactUs = () => {

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-118.131943, 34.156113],
            zoom: 13
        });

        map.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken
            }),
            'top-left'
        );
    }, [])


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4a5pl32', 'template_xqd0d55', e.target, 'user_gMTsEXepOjxBr7dInIGlo')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        alert('Thanks For Contact With Us.')
    };
    return (
        <div className="container">
            {/* mapBox gl  */}
            <div id="map"></div>
            <div style={{ borderBottom: "1px solid lightGray" }}>
                <div className='col-lg-6 my-5'>
                    <h4 className='text-start primary-color1 text-decoration-underline'>New York Office</h4>
                    <p className='text-start'>Morbi mollis elit vitae elit molestie lobortis. Cras eu purus ipsum. Aliquam et ullamcorper nisl. Nam sem justo, sagittis sit amet sem at, mollis congue eros. Quisque vel mattis eros. Proin euismod massa id est finibus, rutrum ornare velit pellentesque. Ut arcu magna, interdum eget egestas eget, sagittis a libero. Donec felis tellus, vehicula at purus condimentum, hendrerit dictum odio. Vivamus et condimentum sapien.</p>
                    <div className='d-flex'>
                        <div className='d-flex justify-content-center align-items-center me-5'>
                            <i className="fas fa-headset fa-4x"></i>
                            <div className='ms-4'>
                                <p className='text-start'>Call us:</p>
                                <h6>
                                    (866) 123 4567
                                </h6>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src="https://i.ibb.co/7yLWC06/calendar.png" className='me-4' style={{ width: "70px" }} alt="" />
                            <div>
                                <p className='text-start'>Monday — Friday <br />
                                    9:00 AM — 6:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex my-5'>
                        <div className='d-flex justify-content-center align-items-center me-5'>
                            <img src="https://i.ibb.co/Mk9yXMy/location.png" style={{ width: "70px" }} alt="" />
                            <div>
                                <p className='text-start ms-3'>216 Trinity Ave, <br />
                                    Pasadena, <br />
                                    CA 95046, <br />
                                    United States</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src="https://i.ibb.co/x80YGZD/mail-box.png" style={{ width: "90px" }} alt="" />
                            <div>
                                <p>
                                    Have any Questions?
                                </p>
                                <a href="info@stylexample.net">info@stylexample.net</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                </div>
            </div>
            <div className='d-flex ' style={{ borderBottom: "1px solid lightGray" }}>
                <div className='col-lg-6 my-5 bg-light shadow px-4 Office-style' >
                    <h4 className='text-start mt-5 text-decoration-underline primary-color1'>California Office</h4>
                    <p className='text-start'>Etiam placerat, nunc et consequat ullamcorper, risus ligula luctus nibh, quis ultrices felis massa varius odio. Pellentesque feugiat mi congue vehicula pellentesque. Aliquam sagittis velit tellus, cursus porttitor turpis fringilla quis. Donec venenatis tincidunt sapien, at porta nisl consectetur ac. Aliquam maximus lectus id neque dignissim, nec molestie magna consequat. Sed convallis sem diam.</p>
                    <div className='d-flex'>
                        <div className='d-flex justify-content-center align-items-center me-5'>
                            <i className="fas fa-headset fa-4x"></i>
                            <div className='ms-4'>
                                <p className='text-start'>Call us:</p>
                                <h6>
                                    (866) 123 4567
                                </h6>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src="https://i.ibb.co/7yLWC06/calendar.png" className='me-4' style={{ width: "70px" }} alt="" />
                            <div>
                                <p className='text-start'>Monday — Friday <br />
                                    9:00 AM — 6:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex my-5'>
                        <div className='d-flex justify-content-center align-items-center me-5'>
                            <img src="https://i.ibb.co/Mk9yXMy/location.png" style={{ width: "70px" }} alt="" />
                            <div>
                                <p className='text-start ms-3'>216 Trinity Ave, <br />
                                    Pasadena, <br />
                                    CA 95046, <br />
                                    United States</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src="https://i.ibb.co/x80YGZD/mail-box.png" style={{ width: "90px" }} alt="" />
                            <div>
                                <p>
                                    Have any Questions?
                                </p>
                                <a href="info@stylexample.net">info@stylexample.net</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mt-5 office-img" >
                </div>
            </div>
            <div className=" d-flex container p-5 my-5 rounded" style={{ backgroundColor: "#D9D7F1" }}>
                <div className="col-lg-5 bg-dark p-5 my-5 rounded shadow" style={{ marginRight: "100px" }}>
                    <h5 className='text-light'>Share Your FeedBack And Contact With US.</h5>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-3">
                            <div className="input-group input-group-sm mb-3">
                                <span className="input-group-text" name="user_name" id="inputGroup-sizing-sm"><i className="fas fa-user"></i></span>
                                <input type="text" className="form-control" name="user_name" placeholder='First Name,Last Name*' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <div className="input-group input-group-sm mb-3">
                                <span className="input-group-text" name="user_name" id="inputGroup-sizing-sm"><i className="fas fa-envelope"></i></span>
                                <input type="email" className="form-control" name="user_email" placeholder='Your Email Address*' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <div className="input-group input-group-sm mb-3">
                                <span className="input-group-text" name="user_name" id="inputGroup-sizing-sm"><i className="fas fa-phone-alt"></i></span>
                                <input type="text" className="form-control" placeholder='Your Phone' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea className="form-control" name="message" placeholder='Your Message' id="exampleFormControlTextarea1" rows="3"></textarea>
                            <input type="submit" className="btn primary-btn-1 text-light mt-4" value="Send Message" />
                        </div>
                    </form>
                </div>
                <div className="col-lg-3">
                    <h4 className='text-start ms-5 text-decoration-underline my-5'>Your Contact</h4>
                    <div className='d-flex ms-5'>
                        <img src="https://homepress.stylemixthemes.com/wp-content/uploads/2018/12/contact-1.jpg" style={{ width: "70px", height: "75px", marginRight: "20px" }} alt="" />
                        <div>
                            <h6>Berg Devien</h6>
                            <p className='fw-light'>Head of communications</p>
                            <p>Email:</p>
                            <a href="b.devien@example.com">b.devien@example.com</a>
                            <p>Skype: <a href="berg.property">berg.property</a></p>
                        </div>
                    </div>
                    <div className='d-flex ms-5 mt-5'>
                        <img src="https://homepress.stylemixthemes.com/wp-content/uploads/2018/12/contact-2.jpg" style={{ width: "70px", height: "75px", marginRight: "20px" }} alt="" />
                        <div>
                            <h6>Berg Devien</h6>
                            <p className='fw-light'>Priscilla Sorvino</p>
                            <p>Email:</p>
                            <a href="b.devien@example.com">b.devien@example.com</a>
                            <p>Skype: <a href="berg.property">Priscilla Sorvino</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};