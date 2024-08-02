import SecondFooter from "../components/SecondFooter";
import chevronIcon from '../assets/image/chevron.svg';
import expProfil from '../assets/image/exp-profil.png';
import SideNav from '../components/sideNav'
import '../assets/style/storyPage.css';
import StoryCover2 from '../assets/image/storycover2.png';
import Story from '../assets/image/story-1.png';


function StoryPage() {
    return (
        <>
        <div className="container">
            <div className="sidebar">
                <div className="musicPages-side-container">
                    <SideNav />
                </div>
            </div>
            <div className="main">
                <div className="journalPages-core-top-content">
                    <div className="back-button-journalPages">
                        <img src={chevronIcon} alt="back" />
                        <p>Story</p>
                    </div>
                    <div className="user-profile">
                        <img src={expProfil} alt="user" />
                    </div>
                </div>
                <hr />
                <div className="recent">
                    <p className="header">Recent Activity</p>
                    <div className="history">
                        <div className="story-card">
                            <div className="story-cover">
                                <img src={Story}/>
                            </div>
                            <div className="detail-story">
                                <p className="title">Track</p>
                                <div className="continue-read">
                                    <p>Continue Reading</p>
                                    <p className="percentage">30% Completed</p>
                                </div>
                            </div>
                        </div>

                        <div className="story-card">
                            <div className="story-cover">
                                <img src={Story}/>
                            </div>
                            <div className="detail-story">
                                <p className="title">Track</p>
                                <div className="continue-read">
                                    <p>Continue Reading</p>
                                    <p className="percentage">30% Completed</p>
                                </div>
                            </div>
                        </div>

                        <div className="story-card">
                            <div className="story-cover">
                                <img src={Story}/>
                            </div>
                            <div className="detail-story">
                                <p className="title">Track</p>
                                <div className="continue-read">
                                    <p>Continue Reading</p>
                                    <p className="percentage">30% Completed</p>
                                </div>
                            </div>
                        </div>

                        <div className="story-card">
                            <div className="story-cover">
                                <img src={Story}/>
                            </div>
                            <div className="detail-story">
                                <p className="title">Track</p>
                                <div className="continue-read">
                                    <p>Continue Reading</p>
                                    <p className="percentage">30% Completed</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="main-story">
                    <p className="header">Story Collection</p>
                    <div className="collection">
                        <div className="story-card">
                            <div className="story-cover">
                                <img src={Story}/>
                            </div>
                            <div className="detail-story">
                                <p className="title">Track</p>
                                <button>Read</button>
                            </div>
                        </div>

                        <div className="story-card">
                            <div className="story-cover">
                                <img src={Story}/>
                            </div>
                            <div className="detail-story">
                                <p className="title">Track</p>
                                <button>Read</button>
                            </div>
                        </div>

                        <div className="story-card">
                            <div className="story-cover">
                                <img src={Story}/>
                            </div>
                            <div className="detail-story">
                                <p className="title">Track</p>
                                <button>Read</button>
                            </div>
                        </div>

                        <div className="story-card">
                            <div className="story-cover">
                                <img src={Story}/>
                            </div>
                            <div className="detail-story">
                                <p className="title">Track</p>
                                <button>Read</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="journalPages-footer-container">
                    <SecondFooter/>
                </div>
            </div>
        </div>
        </>
    );
}

export default StoryPage;