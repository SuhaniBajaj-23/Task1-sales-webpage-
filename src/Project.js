import React from 'react';
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({title,price,image,disc}){
    const [{cart}, dispatch] = useStateValue();

    // console.log("this is the cart >>>",cart);

    const addToCart = () => {
        dispatch({
            type:"ADD_TO_CART",
            item:{
                title: title,
                price: price,
                image: image,
                disc: disc,
            },

        });

    };
    return(
            <div className="product">
                <div className="product__info">
                    <p>{title}</p>
                    <p classname="product__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product__disc">
                        <p>{disc}</p>

                    </div>
                </div>
                <img src={image} alt=" " />
                <button onClick={addToCart}>Add to Cart</button>

            </div>
    );
}

export default Product;