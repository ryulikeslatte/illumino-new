import '../assets/style/LandingPage.css'
import '../assets/style/app.css'
import LandingPageNav from "../components/LandingPageNav.jsx"
import Footer from "../components/Footer.jsx"
import Content1 from "../assets/image/content-1.png"
import Content2 from "../assets/image/content-2.png"
import Stars from "../assets/image/stars.png"
import GlassesGirl from "../assets/image/girl with glasses.png"

function LandingPage(){
    return(
        <>
        <div className="content">
            <div className="navbar">
                <LandingPageNav/>
            </div>
            <div className="landingPage-main-content">
                <div className="hero-user">
                    <h1>Get Enough Rest for a <span className="gradient-word">Healthy</span> Body and Mind</h1>
                    <div className="hero-text-container">
                        <div className="circle-div"></div>
                        <p>Overcome stress and anxiety with an ideal sleep atmosphere through relaxing music and calming bedtime stories. Getting enough, quality sleep is important for overall health and happiness.</p>
                        <a href="#">See more</a>
                    </div>
                </div>
                <div className="why-us">
                    <div className="head-content" id="why">
                        <h1>Why Us</h1>
                    </div>
                    <div className="filler-content">
                        <div className="content-1">
                            <img src={Content1} alt="Sleeping Person" />
                            <div className="content-1-text">
                                <h2>Healing Program</h2>
                                <p>Our Therapeutic with music, jurnal, daily activity</p>
                            </div>
                        </div>
                        <div className="content-2">
                            <div className="content-2-text">
                            <h2>Positive Energy</h2>
                            <p>Helping you on your path</p>
                            </div>
                            <img src={Content2} alt="Running Person" />
                        </div>
                    </div>
                </div>
                <div className="exceptional-testimonia">
                    <div className="head-content-2" id="testimonials">
                        <p>Our User</p>
                        <h1>Exceptional Testimonia</h1>
                    </div>
                    <div className="testimonia-content">
                        <div className="testimonia-card">
                            <img src={GlassesGirl} alt="Girl with glasses" className="testimonia-card-image"/>
                            <div className="card-text">
                                <h2>Feedback</h2>
                                <p>An interesting website that can solve my complaints through the features provided. I gave it 5 stars because I liked it. simple but makes me happy and sleep soundly.</p>
                                <div className="testimonia-rating">
                                    <img src={Stars} alt="star" />
                                    <img src={Stars} alt="star" />
                                    <img src={Stars} alt="star" />
                                    <img src={Stars} alt="star" />
                                    <img src={Stars} alt="star" />
                                </div>
                                <h3>Siska Aulia</h3>
                                <p className="testimonia-location">Bandung, Indonesia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="footer">
                <Footer/>
            </div> */}
        </div>
        
        </>
    );
}

export default LandingPage