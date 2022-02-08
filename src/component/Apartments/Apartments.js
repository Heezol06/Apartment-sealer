import React from 'react';
import { useEffect, useState } from 'react';
import Apartment from './../Apartment/Apartment';

const Apartments = () => {
    const [apartments, setApartment] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7000/apartments')
            .then(res => res.json())
            .then(data => setApartment(data))
    }, [])
    return (
        <div className='container  '>
            <div className='row  py-5 '>
                {
                    apartments.map(apartment => <Apartment apartment={apartment}>

                    </Apartment>)
                }
            </div>
        </div>
    );
};

export default Apartments;