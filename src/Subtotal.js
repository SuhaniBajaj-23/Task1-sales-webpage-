import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {getCartTotal} from "./reducer";
import {useStateValue} from "./StateProvider";
import { Link} from "react-router-dom";

function Subtotal(){
    const [{cart},dispatch]=useStateValue();

    return(
        <div className="Subtotal">
            <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>
                    Subtotal ({cart.length} items): <strong>{value}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox"/>By clicking this you agree to all the payment policies
                </small>
                </>

            )}
            decimalScale={2}
            value={getCartTotal(cart)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={'$'}
            />
            <Link to="/payment">
            <button className="subtotal__button">Proceed to Checkout</button> </Link>
        </div>

    );
}
export default Subtotal;