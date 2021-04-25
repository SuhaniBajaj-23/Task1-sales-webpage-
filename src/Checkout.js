import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout(){
    const [{cart, user},dispatch]=useStateValue();

    return(
                
        <div className="checkout">
            {/* <img 
        src="https://webgradients.com/public/webgradients_png/008%20Rainy%20Ashville.png"/> */}
            
            <div className="checkout__left">
                <img className="checkout__ad" src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/WS_Advisor_Trial_V1_A.png?SOSYiPVBMOv_PSdUSUlCBwjL1b4E1nxN&itok=JqP7x0nw" alt=""/>
                <div>
                    {/* <h3>Hello {user?.email}</h3> */}
                    <h2 className="checkout__title">
                        Your Shopping Cart
                    </h2>

                    {cart.map(item=>(
                        <CheckoutProduct
                          title={item.title}
                          image={item.image}
                          price={item.price}
                          disc={item.disc}
                          />
                    ))}
                    

                </div>
            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div>

            

        </div>

    );
}

export default Checkout;