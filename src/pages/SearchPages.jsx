import SideNav from '../components/sideNav'
import Footer from '../components/SecondFooter'
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
import MusicCover8 from '../assets/image/musicover5.png'
import MusicCover9 from '../assets/image/musicover6.png'
import StoryCover1 from '../assets/image/storycover1.png'
import StoryCover2 from '../assets/image/storycover2.png'
import StoryCover3 from '../assets/image/storycover3.png'
import StoryCover4 from '../assets/image/storycover4.png'
import StoryCover5 from '../assets/image/storycover5.png'
import StoryCover6 from '../assets/image/storycover6.png'
import StoryCover7 from '../assets/image/storycover7.png'
import JournalIcon from '../assets/image/journalColor.svg'
import calendarIcon from '../assets/image/calendarColor.svg'
import chevronIcon from '../assets/image/chevron.svg'
import expProfil from '../assets/image/exp-profil.png'
import SearchIcon from '../assets/image/search-icon.png'
import '../assets/style/searchPages.css'

function SearchPages(){
    return(
        <>
        <div className="searchPage-container">

            <div className="nav-containers">
                <SideNav/>
            </div>
            <div className="searchPage-content">
                <div className="searchPage-top-content">
                    <div className="back-button-searchPage">
                        <img src={chevronIcon} alt="back" />
                        <p>Search</p>
                    </div>
                    <div className="user-profile">
                        <img src={expProfil} alt="user" />
                    </div>
                </div>
                <div className="searchPage-searchField">
                    <img src={SearchIcon} alt="search" />
                    <input type="text" placeholder='Search' />
                </div>
                <div className="searchPage-recent-activity">
                    <h2>Recent Activity</h2>
                    <div className="recent-activity-card-list">
                        <div className="recent-activity-card">
                            <img src={MusicCover1} alt="music cover" />
                            <p>Top Hit 1</p>
                        </div>
                        <div className="recent-activity-card">
                            <img src={MusicCover5} alt="music cover" />
                            <p>Sad</p>
                        </div>
                        <div className="recent-activity-card">
                            <img src={MusicCover8} alt="music cover" />
                            <p>Meditation</p>
                        </div>
                        <div className="recent-activity-card">
                            <img src={StoryCover5} alt="music cover" />
                            <p>Relathionship</p>
                        </div>
                        <div className="recent-activity-card">
                            <img src={MusicCover9} alt="music cover" />
                            <p>Happy mood</p>
                        </div>
                        <div className="recent-activity-card">
                            <img src={MusicCover8} alt="music cover" />
                            <p>Sleeping</p>
                        </div>
                       
                    </div>
                </div>
                <div className="searchPage-popular-songs">
                    <h1>Popular Songs</h1>
                    <div className="popular-songs-list">
                        <div className="popular-songs-card">
                            <img src={MusicCover1} alt="music cover" />
                            <div className="popular-songs-card-detail">
                                <p>Top hit 1</p>
                                <p>3:45</p>
                                <img src={PlayButton} alt="" />
                            </div>
                        </div>
                        <div className="popular-songs-card">
                            <img src={MusicCover2} alt="music cover" />
                            <div className="popular-songs-card-detail">
                                <p>Happy mood</p>
                                <p>3:15</p>
                                <img src={PlayButton} alt="" />
                            </div>
                        </div>
                        <div className="popular-songs-card">
                            <img src={MusicCover3} alt="music cover" />
                            <div className="popular-songs-card-detail">
                                <p>Self health</p>
                                <p>3:15</p>
                                <img src={PlayButton} alt="" />
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="searchPage-popular-story">
                    <h1>Popular Story</h1>
                    <div className="popular-story-list">
                        <div className="popular-story-card">
                            <img src={StoryCover5} alt="story cover" />
                            <div className="popular-story-card-detail">
                                <p>Relathionship</p>
                                <p>Erna Swiss</p>
                            </div>
                        </div>
                        <div className="popular-story-card">
                            <img src={StoryCover6} alt="story cover" />
                            <div className="popular-story-card-detail">
                                <p>Human and cat</p>
                                <p>Erna Swiss</p>
                            </div>
                        </div>
                        <div className="popular-story-card">
                            <img src={StoryCover7} alt="story cover" />
                            <div className="popular-story-card-detail">
                                <p>People's</p>
                                <p>Erna Swiss</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="searchPage-feeling-content">
                    <p>Hello arinza</p>
                    <h2>How are you feeling today?</h2>
                    <div className="feeling-content-list">
                        <img src={SadReaction} alt="sad" />
                        <img src={NormalReaction} alt="normal" />
                        <img src={HappyReaction} alt="happy" />
                    </div>
                </div>
                <div className="searchPage-music-content">
                    <div className="music-top-content">
                        <h2>Music</h2>
                        <p><u>See all</u></p>
                    </div>
                    <div className="music-list-content">
                        <div className="music-list-content-card">
                            <img src={MusicCover4} alt="Music Cover" />
                            <div className="music-list-content-card-detail">
                                <p>Waiting from the bus</p>
                                <p>3:45</p>
                                <img src={PlayButton} alt="play button" />
                            </div>
                        </div>
                        <div className="music-list-content-card">
                            <img src={MusicCover5} alt="Music Cover" />
                            <div className="music-list-content-card-detail">
                                <p>Coups</p>
                                <p>4:20</p>
                                <img src={PlayButton} alt="play button" />
                            </div>
                        </div>
                        <div className="music-list-content-card">
                            <img src={MusicCover6} alt="Music Cover" />
                            <div className="music-list-content-card-detail">
                                <p>Night with friend</p>
                                <p>4:20</p>
                                <img src={PlayButton} alt="play button" />
                            </div>
                        </div>
                        <div className="music-list-content-card">
                            <img src={MusicCover7} alt="Music Cover" />
                            <div className="music-list-content-card-detail">
                                <p>Summer Vibes</p>
                                <p>3:15</p>
                                <img src={PlayButton} alt="play button" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="searchPage-story-content">
                    <div className="story-top-content">
                        <h2>Track</h2>
                        <p><u>See all</u></p>
                    </div>
                    <div className="story-list-content">
                        <div className="story-list-content-card">
                            <img src={StoryCover1} alt="story Cover" />
                            <div className="story-list-content-card-detail">
                                <p>Track</p>
                                <p>3:45</p>
                            </div>
                        </div>
                        <div className="story-list-content-card">
                            <img src={StoryCover2} alt="story Cover" />
                            <div className="story-list-content-card-detail">
                                <p>My Emotional</p>
                                <p>4:20</p>
                            </div>
                        </div>
                        <div className="story-list-content-card">
                            <img src={StoryCover3} alt="story Cover" />
                            <div className="story-list-content-card-detail">
                                <p>Adventure Night</p>
                                <p>4:20</p>
                            </div>
                        </div>
                        <div className="story-list-content-card">
                            <img src={StoryCover4} alt="story Cover" />
                            <div className="story-list-content-card-detail">
                                <p>Summer Vibes</p>
                                <p>3:15</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="searchPage-daily-reflection-content">
                    <h2>Daily Reflection</h2>
                    <div className="daily-reflection-content-list">
                        <div className="daily-reflection-content-card">
                            <img src={JournalIcon} alt="Journal Icon" />
                            <h3>My Journal</h3>
                            <p>Write about it...</p>
                        </div>
                        <div className="daily-reflection-content-card">
                            <img src={calendarIcon} alt="Journal Icon" />
                            <h3>Activity Calendar</h3>
                            <p>Shedule your daily activities here...</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="searchPage-footer-content">
            <Footer/>
        </div>
        </>
    );
}

export default SearchPages