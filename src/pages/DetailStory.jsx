import SecondFooter from "../components/SecondFooter";
import chevronIcon from '../assets/image/chevron.svg';
import expProfil from '../assets/image/exp-profil.png';
import SideNav from '../components/sideNav'
import '../assets/style/detailStory.css';
import storyCover from '../assets/image/detailStory.png';
import speakerLogo from '../assets/image/speaker.png';
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {truncateContent} from "../utils/text.js";


function DetailStory() {
    const nav = useNavigate();

    const { id } = useParams();
    const [storyData, seStoryData] = useState(null);


    const fetchMusicDetails = async () => {
        const response = await fetch(`https://illumino-api.kakashispiritnews.my.id/api/story?id=${id}`);
        if (response.status === 200 || response.status === 201) {
            const data = await response.json();
            seStoryData(data.data);
        }
    };


    useEffect(() => {
        console.info(id)
        fetchMusicDetails();
    }, [id]);

    return (
        <>
        <div className="container">
            <div className="sidebar">
                <SideNav />
            </div>
            <div className="main">
                <div className="journalPages-core-top-content">
                    <div className="back-button-journalPages">
                        <img
                            src={chevronIcon}
                            alt="back"
                            onClick={() => {
                                nav(`/home`)
                            }}
                            style={{ cursor: 'pointer' }}
                        />
                        <p>Story</p>
                    </div>
                    <div className="user-profile">
                        <img src={expProfil} alt="user" />
                    </div>
                </div>
                <hr />
                <div className="main-content">
                    <img src={`https://illumino-api.kakashispiritnews.my.id${storyData?.image}`}/>
                    <div className="story-content">
                        <div className="title-section">
                            <p className="title">{storyData?.title}</p>
                            <p className="artist">{storyData?.author}</p>
                            <a href='/story'><img src={speakerLogo}/></a> 
                        </div>
                        <div className="story">
                            <p>{truncateContent(storyData?.content)}</p>
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

export default DetailStory;