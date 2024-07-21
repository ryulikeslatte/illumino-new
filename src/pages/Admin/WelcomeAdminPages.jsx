import '../../assets/style/LandingPageAdmin.css'
import '../../assets/style/LandingPageAdminNav.css'
import logo from '../../assets/image/llumino.png'
import {Link} from "react-router-dom"
// import Footer from "../../components/Footer.jsx"
// import Content1 from "../../assets/image/content-1.png"
// import Content2 from "../../assets/image/content-2.png"
// import Stars from "../../assets/image/stars.png"
// import GlassesGirl from "../../assets/image/girl with glasses.png"

function WelcomeAdminPages(){
    return(
        <>
        <div className="admin-nav-container">
            <img src={logo} alt="llumino" className="logo" />
            <nav>
                <div className="admin-links-group">
                    <ol>
                        <li><Link to="/login">Log In</Link></li>
                    </ol>
                </div>
            </nav>
        </div>
        <div className="hero">
            <h1>Get Enough Rest for a <span className="gradient-word">Healthy</span> Body and Mind</h1>
            <div className="hero-text-container">
            <div className="circle-div"></div>
            <p>Overcome stress and anxiety with an ideal sleep atmosphere through relaxing music and calming bedtime stories. Getting enough, quality sleep is important for overall health and happiness.</p>
            <a href="#">Welcome Admin</a>
            </div>
        </div>
        </>
    );
}

export default WelcomeAdminPages