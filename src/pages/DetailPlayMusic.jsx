import SecondFooter from "../components/SecondFooter";
import chevronIcon from '../assets/image/chevron.svg';
import expProfil from '../assets/image/exp-profil.png';
import SideNav from '../components/sideNav'
import '../assets/style/detailPlayMusic.css';
import PlayButton from '../assets/image/play-button.svg';
import RepeatButton from '../assets/image/repeat.png';
import ShuffleButton from '../assets/image/shuffle.png';
import PreviousButton from '../assets/image/previous.png';
import PlayButton2 from '../assets/image/play.png';
import NextButton from '../assets/image/next.png';
import MusicCover6 from '../assets/image/musicover3.png'
import { Link } from "react-router-dom";
import MusicBar from '../assets/image/music-bar.png';
import PlayMusic from '../components/PlayMusic'

function DetailPlayMusic() {
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
                <div className="main-content-music">
                    <div className="music-cover">
                        <img src={MusicCover6} alt="music cover"/>
                    </div>
                    <div className="explore">
                        <p>More</p>
                        <div className="rec">
                            <div className="music-rec">
                                <img src={MusicCover6} />
                                <p>Top Hit</p>                 
                            </div>
                            <div className="play">
                                <img src={PlayButton} className="play-button"/>
                            </div>
                        </div>

                        <div className="rec">
                            <div className="music-rec">
                                <img src={MusicCover6} />
                                <p>Top Hit</p>                 
                            </div>
                            <div className="play">
                                <img src={PlayButton} className="play-button"/>
                            </div>
                        </div>

                        <div className="rec">
                            <div className="music-rec">
                                <img src={MusicCover6} />
                                <p>Top Hit</p>                 
                            </div>
                            <div className="play">
                                <img src={PlayButton} className="play-button"/>
                            </div>
                        </div>

                        <div className="rec">
                            <div className="music-rec">
                                <img src={MusicCover6} />
                                <p>Top Hit</p>                 
                            </div>
                            <div className="play">
                                <img src={PlayButton} className="play-button"/>
                            </div>
                        </div>
                        
                    </div>                
                </div>
                <div className="button-bar">
                    <PlayMusic/>
                </div>
                <div className="journalPages-footer-container">
                    <SecondFooter/>
                </div>    
            </div>
        </div>
        </>
    );
}

export default DetailPlayMusic;