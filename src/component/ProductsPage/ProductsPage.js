import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
    const [products, setProducts] = useState([])
    const [searchData, setSearchData] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch(`https://still-ravine-04691.herokuapp.com/apartments`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setSearchData(data)
            })
    }, [])

    const handelAddToCart = product => {
        const newCart = [...cart, product]
        setCart(newCart)

    }
    const handleOnchange = (e) => {
        const searchProduct = (e.target.value);
        const matchedProducts = products.filter(product => product.location.toLowerCase().includes(searchProduct.toLowerCase()))
        setSearchData(matchedProducts);
    }
    let total = 0;
    for (const product of cart) {
        total = total + parseInt(product.price);
    }
    return (
        <div className=' d-flex'>
            <div className="row  col-lg-10 m-2">
                <input type="text" onChange={handleOnchange} className='input-style my-5 rounded-pill p-1 px-4 border' placeholder='Search Which Location You Want To Buy Your Apartment' name="search" maxLength={3} size="3" style={{ backgroundColor: 'lightgray' }} />

                <h1 className='primary-color1 text-decoration-underline my-5'>All Apartments Here.</h1>

                {
                    searchData.map(product => <div key={product._id} className="col-lg-4" style={{ backgroundColor: "#D6E5FA", width: "350px", marginRight: "20px", height: "340px", marginBottom: "30px", borderRadius: "10px" }}>
                        <div className='position-relative mt-3 mx-auto'>
                            <img src={product.img1} className='apartment-img' style={{ width: "300px", borderRadius: "7px" }} alt="" />
                            <span className="position-absolute top-0 start-75 translate-middle badge rounded-pill bg-danger">
                                -10%
                            </span>
                            <div className='overlay d-flex align-items-center justify-content-between'>
                                <button className='text border-0 ' onClick={() => handelAddToCart(product)} style={{ backgroundColor: "#cdf2ff" }}>ADD TO CART </button>
                                <i className="ms-5 fas fa-plus"></i>
                            </div>
                        </div>
                        <div className='d-flex justify-content-around'>
                            <h6>{product.location}</h6>
                            <p className="text-danger fw-bold">{product.price}</p>
                        </div>
                        <div className='d-flex justify-content-around'>
                            <div className='d-flex align-items-center '>
                                <p> <i className="fas fa-bed"></i> {product.bads}Beds</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <p> <i className="fas fa-bath"></i> {product.baths}Baths</p>
                            </div>
                        </div>
                        <Link to={`/bookingApartment/${product._id}`}><button className='primary-btn-1 border-0 p-1 rounded'>Book This</button></Link>
                    </div>)
                }
            </div>
            <div className="col-lg-1 " style={{ borderLeft: "1px solid lightGray" }}>
                <h4 className='text-start ms-2 text-danger'>Cart</h4>
                <p>Order Items:{cart.length}</p>
                <p className='text-start ms-2'>Total:{total}</p>
            </div>
        </div>
    );
};

export default ProductsPage;