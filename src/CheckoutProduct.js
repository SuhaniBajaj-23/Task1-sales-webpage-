import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";

function CheckoutProduct({image, title, price, disc, hideButton }) {
    const [{ cart }, dispatch] = useStateValue();

    const removeFromCart = () => {
    
        dispatch({
            type: 'REMOVE_FROM_CART',
            title: title,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className="checkoutProduct__disc">
                    {disc}
                </p>
                {!hideButton && ( 
                    <button  onClick={removeFromCart}>Remove from Cart</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct