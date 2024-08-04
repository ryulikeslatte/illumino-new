import SideNav from '../components/sideNav'
import SecondFooter from '../components/SecondFooter'
import GoogleIcon from '../assets/image/google.svg'
import MusicCover1 from '../assets/image/tophit1.png'
import MusicCover2 from '../assets/image/tophit2.png'
import MusicCover3 from '../assets/image/tophit3.png'
import PlayButton from '../assets/image/play-button.svg'
import SadReaction from '../assets/image/sad.png'
import NormalReaction from '../assets/image/normal.png'
import HappyReaction from '../assets/image/happy.png'
import MusicCover4 from '../assets/image/musicover1.png'
import MusicCover5 from '../assets/image/musicover2.png'
import MusicCover6 from '../assets/image/musicover3.png'
import MusicCover7 from '../assets/image/musicover4.png'
import StoryCover1 from '../assets/image/storycover1.png'
import StoryCover2 from '../assets/image/storycover2.png'
import StoryCover3 from '../assets/image/storycover3.png'
import StoryCover4 from '../assets/image/storycover4.png'
import JournalIcon from '../assets/image/journalColor.svg'
import calendarIcon from '../assets/image/calendarColor.svg'
import '../assets/style/homePage.css'

function HomePages(){
    return(
        <>
        <div className="homePage-container">
            <div className="homePage-side-container">
                <SideNav/>
            </div>
            <div className="content">
                <div className="homePage-top-content">
                    <p>Welcome to llumino!</p>
                    <div className="homePage-login-option">
                        <a href="#">Sign Up</a>
                        <a href="#">
                            <div className="google-option">
                                <img src={GoogleIcon} alt="Google Icons" />
                                Log in
                            </div>
                        </a>
                    </div>
                </div>
                <hr />
                <div className="main-content">
                    <div className="homePage-popular-songs">
                        <h1>Popular Songs</h1>
                        <div className="popular-songs-list">
                            <div className="popular-songs-card">
                                <div className="popular-songs-card-detail">
                                    <img src={MusicCover1} alt="music cover" className='cover' />
                                    <div className="card-info">
                                        <p>Top hit 1</p>
                                        <p>3:45</p>
                                        <img src={PlayButton} alt=""/>
                                    </div>  
                                </div>
                            </div>
                            <div className="popular-songs-card">
                                <div className="popular-songs-card-detail">
                                    <img src={MusicCover2} alt="music cover" className='cover' />
                                    <div className="card-info">
                                        <p>Happy mood</p>
                                        <p>3:15</p>
                                        <img src={PlayButton} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="popular-songs-card">
                                <div className="popular-songs-card-detail">
                                    <img src={MusicCover3} alt="music cover" className='cover'/>
                                    <div className="card-info">
                                        <p>self health</p>
                                        <p>3:15</p>
                                        <img src={PlayButton} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="homePage-feeling-content">
                    <p>Hello arinza</p>
                    <h2>How are you feeling today?</h2>
                    <div className="feeling-content-list">
                        <img src={SadReaction} alt="sad" />
                        <img src={NormalReaction} alt="normal" />
                        <img src={HappyReaction} alt="happy" />
                    </div>
                </div>
                <div className="homePage-music-content">
                    <div className="music-top-content">
                        <h1>Music</h1>
                        <p><u>See all</u></p>
                    </div>
                    <div className="music-list-content">
                        <div className="music-list-content-card">
                            <div className="music-list-content-card-detail">
                                <img src={MusicCover4} alt="Music Cover" className='cover'/>
                                <div className="card-info">
                                    <p>Waiting from the bus</p>
                                    <p>3:45</p>
                                    <img src={PlayButton} alt="play button" />
                                </div>
                            </div>
                        </div>
                        <div className="music-list-content-card">
                            <div className="music-list-content-card-detail">
                                <img src={MusicCover5} alt="Music Cover" className='cover'/>
                                <div className="card-info">
                                    <p>Coups</p>
                                    <p>4:20</p>
                                    <img src={PlayButton} alt="play button" />
                                </div>
                            </div>
                        </div>
                        <div className="music-list-content-card">
                            <div className="music-list-content-card-detail">
                                <img src={MusicCover6} alt="Music Cover" className='cover'/>
                                <div className="card-info">
                                    <p>Night with friend</p>
                                    <p>4:20</p>
                                    <img src={PlayButton} alt="play button" />
                                </div>
                            </div>
                        </div>
                        <div className="music-list-content-card">
                            <div className="music-list-content-card-detail">
                                <img src={MusicCover7} alt="Music Cover" className='cover'/>
                                <div className="card-info">
                                    <p>Summer Vibes</p>
                                    <p>3:15</p>
                                    <img src={PlayButton} alt="play button" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homePage-story-content">
                    <div className="story-top-content">
                        <h1>Story</h1>
                        <p><u>See all</u></p>
                    </div>
                    <div className="story-list-content">
                        <div className="story-list-content-card">
                            <div className="story-list-content-card-detail">
                                <img src={StoryCover1} alt="story Cover" className='cover'/>
                                <div className="card-info">
                                    <p>Track</p>
                                    <p>3:45</p>
                                </div>
                            </div>
                        </div>
                        <div className="story-list-content-card">
                            <div className="story-list-content-card-detail">
                                <img src={StoryCover2} alt="story Cover" className='cover'/>
                                <div className="card-info">
                                    <p>My Emotional</p>
                                    <p>4:20</p>
                                </div>
                            </div>
                        </div>
                        <div className="story-list-content-card">
                            <div className="story-list-content-card-detail">
                                <img src={StoryCover3} alt="story Cover" className='cover'/>
                                <div className="card-info">
                                    <p>Adventure Night</p>
                                    <p>4:20</p>
                                </div>
                            </div>
                        </div>
                        <div className="story-list-content-card">
                            <div className="story-list-content-card-detail">
                                <img src={StoryCover4} alt="story Cover" className='cover'/>
                                <div className="card-info">
                                    <p>Summer Vibes</p>
                                    <p>3:15</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homePage-daily-reflection-content">
                    <h1>Daily Reflection</h1>
                    <div className="daily-reflection-content-list">
                        <div className="daily-reflection-content-card">
                            <div className="card-detail">
                                <div className="main-detail">
                                    <img src={JournalIcon} alt="Journal Icon" />
                                    <h3>My Journal</h3>
                                </div>
                                <p>Write about it...</p>
                            </div>
                        </div>
                        <div className="daily-reflection-content-card">
                            <div className="card-detail">
                                <div className="main-detail">
                                    <img src={calendarIcon} alt="Journal Icon" />
                                    <h3>Activity Calendar</h3>
                                </div>
                                
                                <p>Shedule your daily activities here...</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="homePage-footer-content">
                    <SecondFooter/>
                </div>
            </div>
        </div>
        </>
    );
}

export default HomePages