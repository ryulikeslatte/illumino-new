import '../assets/style/LandingPageNav.css'
import {Link} from "react-router-dom"
import LoginPage from "./LoginForm"
import logo from '../assets/image/llumino.png'

function LandingPageNav(){

    return(
        <div className="landingPage-nav">
            <Link to='/'><img src={logo} alt="llumino" className="logo" /></Link>
            <nav className='links'>
                <ol>
                    <li><a href='/#why'>Why Us</a></li>
                    <li><a href='/#testimonials'>Testimonials</a></li>
                    <li><Link to='/login'>Log In</Link></li>
                </ol>
            </nav>
        </div>
    );

}

export default LandingPageNav