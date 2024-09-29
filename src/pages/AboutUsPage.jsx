import '../assets/style/aboutUs.css';
import LandingPageNav from "../components/LandingPageNav.jsx";
import Footer from "../components/Footer.jsx"
import ArinzaImg from '../assets/image/Arinza.png';
import FadiaImg from '../assets/image/Fadia.png'
import RahmanImg from '../assets/image/Rahman.png'
import NazaImg from '../assets/image/Nazario.png'
import BoyImg from '../assets/image/Vinsensius.png'
import LarasImg from '../assets/image/Laras.png'


function AboutUsPage(){
    return(
        <>
        <div className="content">
            <div className="navbar">
                <LandingPageNav/>
            </div>
            <div className="main-content">
                <div className="text-content">
                    <p className='header'>Meet Our Beautiful Team</p>
                    <p className='desc'>We make various things related to reducing stress which makes it difficult to rest at night, starting from providing activities and things that need to be presented to answer the problem of sleep disorders at night.</p>
                </div>
                <div className="team-image">
                    <div className="arinza">
                        <img src={ArinzaImg} alt="Arinza Aurelvia"/>
                        <div className="detail-info">
                            <p className='name'>Arinza Aurelvia</p>
                            <p>Hipster</p>
                        </div>
                    </div>
                    <div className="fadia">
                        <img src={FadiaImg} alt="Fadia Rizqa Yunanto"/>
                        <div className="detail-info">
                            <p className='name'>Fadia Rizqa Yunanto</p>
                            <p>Front-End</p>
                        </div>
                    </div>
                    <div className="vinsesius">
                        <img src={BoyImg} alt="Vinsesius"/>
                        <div className="detail-info">
                            <p className='name'>Vinsesius</p>
                            <p>Front-End</p>
                        </div>
                    </div>
                    <div className="rahman">
                        <img src={RahmanImg} alt="Rahman Hakim"/>
                        <div className="detail-info">
                            <p className='name'>Rahman Hakim</p>
                            <p>Back-End</p>
                        </div>
                    </div>
                    <div className="naza">
                        <img src={NazaImg} alt="Nazario Valente"/>
                        <div className="detail-info">
                            <p className='name'>Nazario Valente</p>
                            <p>Technopreneur</p>
                        </div>
                    </div>
                    <div className="laras">
                        <img src={LarasImg} alt="Larasati"/>
                        <div className="detail-info">
                            <p className='name'>Larasati</p>
                            <p>Technopreneur</p>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        </div>
        </>
    );
}

export default AboutUsPage;