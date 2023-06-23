import React from 'react';

const Cart = ({ cart,handleRemoveFromCart }) => {
    return (
        <div>
            order summary {cart.length}
            {
                cart.map(tshart => <p
                    key={cart.i_d}>
                    {tshart.name}
                    <button onClick={()=>handleRemoveFromCart(tshart._id)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;