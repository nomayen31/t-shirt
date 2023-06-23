import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt,handleAddToCart}) => {
    const {picture, name ,price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture}></img>
            <h4>Name: {name}</h4>
            <p>Price:$ {price}</p>
            <button onClick={()=>handleAddToCart(tshirt)}>But Now</button>
        </div>
    );
};

export default Tshirt;