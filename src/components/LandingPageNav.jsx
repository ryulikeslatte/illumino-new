import '../assets/style/LandingPageNav.css'
import {Link} from "react-router-dom"
import LoginPage from "./LoginForm"
import logo from '../assets/image/llumino.png'

function LandingPageNav(){

    return(
        <div className="nav-container">
            <img src={logo} alt="llumino" className="logo" />
            <nav>
                <div className="links-group">
                    <ol>
                        <li><a href="#">Why Us</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><Link to="/login">Log In</Link></li>
                    </ol>
                </div>
            </nav>
            <div className="empty-div"></div>   
        </div>
    );

}

export default LandingPageNav