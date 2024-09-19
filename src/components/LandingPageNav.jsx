import '../assets/style/LandingPageNav.css'
import {Link} from "react-router-dom"
import logo from '../assets/image/llumino.png'

function LandingPageNav(){
    return(
        <div className="landingPage-nav">
            <div className="nav-content">
                <Link to='/'><img src={logo} alt="llumino" className="logo" /></Link>
                <div className="group-links">
                    <nav className='links'>
                        <ol>
                            <li><a href='/#why'>Why Us</a></li>
                            <li><a href='/#testimonials'>Testimonials</a></li>
                            <li><Link to='/login'>Log In</Link></li>
                            <li><Link to='/about'>About Us</Link></li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    );

}

export default LandingPageNav