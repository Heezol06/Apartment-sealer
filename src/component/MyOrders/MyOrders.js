import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:7000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <h1 className='primary-color1 text-decoration-underline my-3 mb-5'>All Of Your Orders.</h1>
            <table class="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">Order Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price</th>
                        <th scope="col">Pay status</th>
                    </tr>
                </thead>
                {
                    orders.filter(filterOrder => filterOrder.email === user.email).map(order => <tbody key={order._id}>
                        <tr>
                            {/* <th scope="row">1</th> */}
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.location}</td>
                            <td>{order.price}</td>
                            {order.payment ? <td> <button disabled className='bg-success'>Paid</button> </td> : <td> <Link to={`/orders/${order._id}`}><button className='btn btn-danger border'>Pay</button></Link></td>}
                        </tr>
                    </tbody>
                    )}

            </table>
        </div>
    );
};

export default MyOrders;