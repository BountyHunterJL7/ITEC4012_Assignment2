import {
    NavLink
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.png';
import "./styles.css";

export const Header = () => {
    return (
        <nav className="header">
            <ul className="header-list">
                <li className="nav-icon">
                    <NavLink className="nav-option" to="/products"><FontAwesomeIcon icon={faBars} size="lg"></FontAwesomeIcon></NavLink>
                </li>
                

                <NavLink to="/"><img className="logo-image" src={logo} alt="Logo" /></NavLink>

                <li>
                    <NavLink className="nav-option" to="/products">Products</NavLink>
                </li>
                <li>
                    <NavLink className="nav-option" to="/rooms">Rooms</NavLink>
                </li>
                <li>
                    <NavLink className="nav-option" to="/offers">Offers</NavLink>
                </li>
                <li>
                    <NavLink className="nav-option" to="/green-friday">Green Friday</NavLink>
                </li>
                
                <div className="search-wrapper">
                    <form>
                        <FontAwesomeIcon icon={faSearch} size="lg"></FontAwesomeIcon>  
                        <input className="search-input" type="text" placeholder="What are you looking for?"></input>
                        <FontAwesomeIcon icon={faCamera} size="lg"></FontAwesomeIcon>
                    </form>
                </div>
                <li className="nav-icon">
                    <NavLink className="nav-option" to="/location"><FontAwesomeIcon icon={faMapMarkerAlt} size="lg"></FontAwesomeIcon></NavLink>
                </li>
                <li className="nav-icon">
                    <NavLink className="nav-option" to="/track-shipping"><FontAwesomeIcon icon={faTruck} size="lg"></FontAwesomeIcon></NavLink>
                </li>
                <li className="nav-icon">
                    <NavLink className="nav-option" to="/my-profile"><FontAwesomeIcon icon={faUser} size="lg"></FontAwesomeIcon></NavLink>
                </li>
                <li className="nav-icon">
                    <NavLink className="nav-option" to="/shopping-list"><FontAwesomeIcon icon={faHeart} size="lg"></FontAwesomeIcon></NavLink>
                </li>
                <li className="nav-icon">
                    <NavLink className="nav-option" to="/shopping-cart"><FontAwesomeIcon icon={faShoppingBasket} size="lg"></FontAwesomeIcon></NavLink>
                </li>                
            </ul>
            <hr></hr>
        </nav>
        
    );
}