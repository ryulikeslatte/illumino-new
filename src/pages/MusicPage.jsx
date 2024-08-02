import SecondFooter from "../components/SecondFooter";
import chevronIcon from '../assets/image/chevron.svg';
import expProfil from '../assets/image/exp-profil.png';
import SideNav from '../components/sideNav'
import '../assets/style/musicPage.css';
import MusicCover1 from '../assets/image/musicover1.png';
import PlayButton from '../assets/image/play-button.svg';


function MusicPage() {
    return (
        <>
        <div className="container">
            <div className="sidebar">
                <SideNav />
            </div>
            <div className="main">
                <div className="journalPages-core-top-content">
                    <div className="back-button-journalPages">
                        <img src={chevronIcon} alt="back" />
                        <p>Music</p>
                    </div>
                    <div className="user-profile">
                        <img src={expProfil} alt="user" />
                    </div>
                </div>
                <hr />
                {/* 1 */}
                <div className="music-core-content">
                    <div className="music-card">
                        <div className="music-content">
                            <p>1</p>
                            <img src={MusicCover1}/>
                            <div className="detail">
                                <p>Fire</p>
                                <p>Artist enjy</p>
                            </div>
                            
                        </div>
                        <div className="music-duration">
                            <p>3.15</p>
                            <img src={PlayButton}/>
                        </div>
                    </div>
                </div>

                {/* 2 */}
                <div className="music-core-content">
                    <div className="music-card">
                        <div className="music-content">
                            <p>1</p>
                            <img src={MusicCover1}/>
                            <div className="detail">
                                <p>Fire</p>
                                <p>Artist enjy</p>
                            </div>
                            
                        </div>
                        <div className="music-duration">
                            <p>3.15</p>
                            <img src={PlayButton}/>
                        </div>
                    </div>
                </div>

                {/* 3 */}
                <div className="music-core-content">
                    <div className="music-card">
                        <div className="music-content">
                            <p>1</p>
                            <img src={MusicCover1}/>
                            <div className="detail">
                                <p>Fire</p>
                                <p>Artist enjy</p>
                            </div>
                            
                        </div>
                        <div className="music-duration">
                            <p>3.15</p>
                            <img src={PlayButton}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default MusicPage;