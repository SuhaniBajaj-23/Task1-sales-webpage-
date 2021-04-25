import React from 'react';
import { Link } from "react-router-dom";
import "./Payment.css";


function Payment(){
    return (
        <div className='payment'>
            

            <div className='payment__container'>
                <h1>Billing Details</h1>

                <form>
                    <h5>Full Name</h5>
                    <input type='text' />

                    <h5>Address</h5>
                    <input type='text' />

                    <h5>Contact Number</h5>
                    <input type='text' />

                    <h5>Credit Card Number</h5>
                    <input type='text' />

                    <h5>CVV number</h5>
                    <input type='text' />

                    <h5>Card expiry date</h5>
                    <input type='text' />

                    <button type='submit' className="Payment__Button">PAY NOW</button>
                </form>

                

                

               
            </div>
        </div>
    )
}

export default Payment;