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
                    <li><Link to='#'>Why Us</Link></li>
                    <li><Link to='#'>Testimonials</Link></li>
                    <li><Link to='/login'>Log In</Link></li>
                </ol>
            </nav>
        </div>
    );

}

export default LandingPageNav