import {
    NavLink
} from "react-router-dom";
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest ,faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
    return (
        <nav className="footer">
            <div className="footer-element">            
                <div className="footer-heading">IKEA Family</div>
                <div className="footer-info">
                    Bring your ideas to life with rewards, inspiration, discounts and a few surprises along the way.
                    <NavLink className="footer-info" to="/learn-more"> Learn more.</NavLink>
                </div>
                <button className="footer-button">
                    Join now
                </button>
            </div>

            <div className="footer-element">
                <ul className="footer-list">  
                     <div className="footer-heading">Help</div>            
                    <li>
                        <NavLink className="list-element" to="/facebook">Customer service</NavLink>
                    </li>   
                    <li>
                        <NavLink className="list-element" to="/facebook">FAQ</NavLink>
                    </li>   
                    <li>
                        <NavLink className="list-element" to="/facebook">Track my order</NavLink>
                    </li>   
                    <li>
                        <NavLink className="list-element" to="/facebook">Reschedule my order</NavLink>
                    </li>   
                    <li>
                        <NavLink className="list-element" to="/facebook">Cancel my order</NavLink>
                    </li>   
                    <li>
                        <NavLink className="list-element" to="/facebook">Contact us</NavLink>
                    </li>   
                    <li>
                        <NavLink className="list-element" to="/facebook">Your safety concerns</NavLink>
                    </li>   
                    <li>
                        <NavLink className="list-element" to="/facebook">Product recalls</NavLink>
                    </li>   
                    <li>
                        <NavLink className="list-element" to="/facebook">Sell back program</NavLink>
                    </li>   
                    <li>
                        <NavLink className="list-element" to="/facebook">Return policies</NavLink>
                    </li>   
                    <li>
                        <NavLink className="list-element" to="/facebook">Warranties</NavLink>
                    </li>   
                    <li>
                        <NavLink className="list-element" to="/facebook">Order replacement parts</NavLink>
                    </li>   
                
                </ul>
            </div>

            <div className="footer-element">
                <ul className="footer-list">  
                   <div className="footer-heading">Shop & Learn</div> 
                    <li>
                        <NavLink className="list-element" to="/facebook">IKEA Apps</NavLink>
                    </li>   
                    <li>
                        <NavLink className="list-element" to="/facebook">Find a location</NavLink>
                    </li>   
                    <li>
                        <NavLink className="list-element" to="/facebook">IKEA Services</NavLink>
                    </li>   
                    <li >
                        <NavLink className="list-element" to="/facebook">IKEA Catalogue</NavLink>
                    </li>   
                    <li>
                        <NavLink className="list-element" to="/facebook">IKEA Family</NavLink>
                    </li>   
                    <li>
                        <NavLink className="list-element" to="/facebook">IKEA for Business</NavLink>
                    </li>   
                    <li>
                        <NavLink className="list-element" to="/facebook">IKEA Planners</NavLink>
                    </li>
                    <li>
                        <NavLink className="list-element" to="/facebook">IKEA Gift Registry</NavLink>
                    </li>      
                    <li>
                        <NavLink className="list-element" to="/facebook">Buying guides</NavLink>
                    </li>   
                    <li>
                        <NavLink className="list-element" to="/facebook">Gift cards and balance checker</NavLink>
                    </li>   
                    <li>
                        <NavLink className="list-element" to="/facebook">Payment options</NavLink>
                    </li>   
                </ul>
            </div>

            <div className="footer-element">  
                <ul className="footer-list">   
                    <div className="footer-heading">About IKEA</div>  
                    <li>
                        <NavLink className="list-element" to="/facebook">This is IKEa</NavLink>
                    </li>   
                    <li>
                        <NavLink className="list-element" to="/facebook">Jobs</NavLink>
                    </li>   
                    <li>
                        <NavLink className="list-element" to="/facebook">Newsroom</NavLink>
                    </li>   
                    <li>
                        <NavLink className="list-element" to="/facebook">A sustainable everyday</NavLink>
                    </li>   
                    <li>
                        <NavLink className="list-element" to="/facebook">IKEA Foundation</NavLink>
                    </li>   
                </ul>
            </div>
            <div className="footer-icon-list">
                <div className="footer-element-icon-list">
                    <ul className="footer-list">    
                        <li className="nav-icon">
                            <NavLink className="footer-icon" to="/facebook"><FontAwesomeIcon icon={faFacebook} size="lg"></FontAwesomeIcon></NavLink>
                        </li>
                        <li className="nav-icon">
                            <NavLink className="footer-icon" to="/instagram"><FontAwesomeIcon icon={faInstagram} size="lg"></FontAwesomeIcon></NavLink>
                        </li>
                        <li className="nav-icon">
                            <NavLink className="footer-icon" to="/pinterest"><FontAwesomeIcon icon={faPinterest} size="lg"></FontAwesomeIcon></NavLink>
                        </li>
                        <li className="nav-icon">
                            <NavLink className="footer-icon" to="/twitter"><FontAwesomeIcon icon={faTwitter} size="lg"></FontAwesomeIcon></NavLink>
                        </li>
                        <li className="nav-icon">
                            <NavLink className="footer-icon" to="/youtube"><FontAwesomeIcon icon={faYoutube} size="lg"></FontAwesomeIcon></NavLink>
                        </li>                
                    </ul>
                </div>
                <div className="footer-element">
                    <ul className="footer-list">    
                        <li className="nav-icon">
                            <select className="footer-button-icon dropdown" name="language" id="language">
                                <option value="volvo">English</option>
                                <option value="saab">French</option>
                            </select>
                        </li>    
                        <li className="nav-icon">
                            <NavLink className="footer-button-icon" to="/facebook"><FontAwesomeIcon icon={faGlobe} size="lg"></FontAwesomeIcon> Change country</NavLink>
                        </li>    
                            
                    </ul>
                </div>
            </div>

            <hr className="footer-brake"></hr>

                <div>
                    <ul className="footer-list">    
                        <li>
                            <NavLink className="footer-end" to="/facebook">Privacy policy</NavLink>
                        </li>
                        <li>
                            <NavLink className="footer-end" to="/instagram">Cookie policy</NavLink>
                        </li>
                        <li>
                            <NavLink className="footer-end" to="/pinterest">Cookie settings</NavLink>
                        </li>
                        <li>
                            <NavLink className="footer-end" to="/twitter">Responsible Disclosure Policy</NavLink>
                        </li>
                        <li>
                            <NavLink className="footer-end" to="/youtube">Terms & conditions</NavLink>
                        </li>       
                        <li>
                            <NavLink className="footer-end" to="/youtube">Accessibility</NavLink>
                        </li>             
                    </ul>
                </div>
        </nav>
        
    );
}