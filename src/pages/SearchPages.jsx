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
import { Link } from 'react-router-dom'
import MusicCard from '../components/musicCard'
import StoryCard from '../components/storyCard'

function SearchPages(){
    return(
        <>
        <div className="searchPage-container">
            <div className="nav-containers">
                <SideNav/>
            </div>
            <div className="content">
                <div className="searchPage-top-content">
                    <div className="back-button-searchPage">
                        <img src={chevronIcon} alt="back" />
                        <p>Search</p>
                    </div>
                    <div className="user-profile">
                        <img src={expProfil} alt="user" />
                    </div>
                </div>
                <hr />
                <div className="searchPage-main-content">
                    <div className="searchPage-searchField">
                        <img src={SearchIcon} alt="search" />
                        <input type="text" placeholder='Search' />
                    </div>
                    <div className="searchPage-recent-activity">
                        <h1>Recent Activity</h1>
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
                        <div className="songs-list">
                            <MusicCard/>
                            <MusicCard/>
                            <MusicCard/>
                            <MusicCard/>
                        </div>
                    </div>
                    <div className="searchPage-popular-story">
                        <h1>Popular Story</h1>
                        <div className="popular-story-list">
                            <StoryCard/>
                            <StoryCard/>
                            <StoryCard/>
                            <StoryCard/>
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
                            <h1>Music</h1>
                            <Link to='/music'>See all</Link>
                        </div>
                        <div className="music-list-content">
                            <MusicCard/>
                            <MusicCard/>
                            <MusicCard/>
                            <MusicCard/>
                        </div>
                    </div>
                    <div className="searchPage-story-content">
                        <div className="story-top-content">
                            <h1>Story</h1>
                            <Link to='/story'>See all</Link>
                        </div>
                        <div className="story-list-content">
                            <StoryCard/>
                            <StoryCard/>
                            <StoryCard/>
                            <StoryCard/>
                        </div>
                    </div>
                    <div className="searchPage-daily-reflection-content">
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
                </div>
                <div className="searchPage-footer-content">
                    <Footer/>
                </div>
            </div>
        </div>
        </>
    );
}

export default SearchPages