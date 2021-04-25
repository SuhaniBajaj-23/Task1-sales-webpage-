import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import './Header.css';
import {Link} from "react-router-dom"; 
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';

function Header(){
    const [{ cart, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return(
        <div className='header'>
            <Link to="/home">
        <img 
        className="header__logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpvlo6FrDblqKaZSCFuTz2KUekKsWYB16chMRnIxc23GbrJTJgVLCBSGLzZpQuN1HsiHA&usqp=CAU" />
        </Link>
        <div className="header__search">
            <input
            className="header__searchInput" type="text"/>
            <SearchIcon className="header__searchIcon"/>
        </div>
        <div className="header__nav">
            <Link to={!user &&"/login"}>
            <div onClick={handleAuthentication} className="header__option">
                <span className="header__optionLineOne">
                    Hello Guest
                </span>
                <span className="header__optionLineTwo">{user ? 'Sign Out': 'Sign In'}
                    
                </span>
            </div>
            </Link>
            <Link to="/sell">

            <div className="header__option">
            <span className="header__optionLineOne">
                    Sell a
                </span>
                <span className="header__optionLineTwo">
                    product
                </span>
                
            </div></Link>
            <Link to="/checkout">
            <div className="header__option">
            
            <span className="header__optionLineOne">
                    Your
                </span>
                <span className="header__optionLineTwo">
                    Cart {cart?.length}
                </span>
                
            
                </div>
                </Link>
                <div className="header__userlogin">
                    <AccountBoxIcon/>
                </div>
        </div>
        </div>
    )
}

export default Header