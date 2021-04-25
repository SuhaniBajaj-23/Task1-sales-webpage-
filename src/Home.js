import React from 'react';
import "./Home.css";
import Product from "./Project";

function Home() {
    return(
        <div className="Home">
            <div className="home__container">
                <img 
                src="https://webgradients.com/public/webgradients_png/008%20Rainy%20Ashville.png"
                className="home__image"  />
                
            
                <div className="home__row">
                <Product 
                   title="The Lean Startup "
                   price={11.96}
                   image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                   disc="How Constant Innovation Creates Radically Successful Businesses Paperback"
                />
                <Product
                   title="Kenwood kMix Stand Mixer"
                   price={60}
                   image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                   disc="Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"/>
            
            
                </div>
                <div className="home__row">
                <Product 
                  title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                  price={199.99}
                  image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                  disc=""/>
                <Product
                  title="Echo (3rd generation)"
                  price={98.99}
                  image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                  disc="Smart speaker with Alexa, Charcoal Fabric"/>
                <Product
                title="New Apple iPad Pro "
                price={598.99}
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                disc="12.9-inch, Wi-Fi, 128GB - Silver (4th Generation)"/>
            
            
            
                </div>
                <div className="home__row">
                <Product
                  title="Samsung LC49RG90SSUXEN 49' "
                  price={ 1094.98}
                  image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                  disc="Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"/>
            
            
            
                </div>
            </div>
         </div>

    )

}

export default Home;