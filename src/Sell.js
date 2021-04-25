import React from 'react';
import { Link } from "react-router-dom";
import "./Sell.css";

function Sell(){
    return (
        <div className='sell'>
            {/* <Link to='/'>
                { <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>  */}

            <div className='sell__container'>
                <h1>Sell a Product</h1>

                <form>
                    <h5>Product name</h5>
                    <input type='text' />

                    <h5>Product prize</h5>
                    <input type='number' />

                    <h5>Product discription</h5>
                    <input type='text' />

                    <h5>Product image</h5>
                    <input type='file' accept='image/*'></input>
                    <br/>

                    <button type='submit' className="sell__Button">SELL</button>
                </form>

                

               
            </div>
        </div>
    )
}

export default Sell;