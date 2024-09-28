import SecondFooter from "../components/SecondFooter";
import chevronIcon from '../assets/image/chevron.svg';
import expProfil from '../assets/image/exp-profil.png';
import SideNav from '../components/sideNav'
import '../assets/style/storyPage.css';
import ContinueRead from '../components/continueReading'
import StoryCollection from '../components/storyCollection'
import {useEffect, useState} from "react";
import StoryCard from "../components/storyCard.jsx";


function StoryPage() {
    const [stories, setStories] = useState(null);
    const getStories = async () => {
        const response = await fetch('https://illumino-api.kakashispiritnews.my.id/api/story', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async (v) => {
            const resJson = await v.json();

            setStories(resJson.data)
        });
    }

    useEffect(() => {
        getStories()
    }, [])

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
                            {stories?.map((v, id) => {
                                return (
                                    <ContinueRead key={id} data={v}/>
                                )
                            })}
                        </div>
                    </div>
                    <div className="main-story">
                        <h1>Story Collection</h1>
                        <div className="collection">
                            {stories?.map((v, id) => {
                                return (
                                    <StoryCollection key={id} data={v}/>
                                )
                            })}
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