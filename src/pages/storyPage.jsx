import SecondFooter from "../components/SecondFooter";
import chevronIcon from '../assets/image/chevron.svg';
import expProfil from '../assets/image/exp-profil.png';
import SideNav from '../components/sideNav'
import '../assets/style/storyPage.css';
import StoryCover2 from '../assets/image/storycover2.png';
import Story from '../assets/image/story-1.png';
import ContinueRead from '../components/continueReading'
import StoryCollection from '../components/storyCollection'


function StoryPage() {
    return (
        <>
        <div className="storyPage-container">
            <div className="sidebar">
                <div className="musicPages-side-container">
                    <SideNav />
                </div>
            </div>
            <div className="storyPage-main">
                <div className="storyPage-core-top-content">
                    <div className="back-button-journalPages">
                        <img src={chevronIcon} alt="back" />
                        <p>Story</p>
                    </div>
                    <div className="user-profile">
                        <img src={expProfil} alt="user" />
                    </div>
                </div>
                <hr />
                <div className="storyPage-main-content">
                    <div className="recent">
                        <h1>Recent Activity</h1>
                        <div className="history">
                            <ContinueRead/>
                            <ContinueRead/>
                            <ContinueRead/>
                            <ContinueRead/>
                        </div>
                    </div>
                    <div className="main-story">
                        <h1>Story Collection</h1>
                        <div className="collection">
                            <StoryCollection/>
                            <StoryCollection/>
                            <StoryCollection/>
                            <StoryCollection/>
                        </div>
                    </div>
                </div>
                <div className="storyPage-footer-container">
                    <SecondFooter/>
                </div>
            </div>
        </div>
        </>
    );
}

export default StoryPage;