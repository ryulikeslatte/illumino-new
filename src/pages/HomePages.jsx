import SideNav from '../components/sideNav'
import SecondFooter from '../components/SecondFooter'
import GoogleIcon from '../assets/image/google.svg'
import SadReaction from '../assets/image/sad.png'
import NormalReaction from '../assets/image/normal.png'
import HappyReaction from '../assets/image/happy.png'
import JournalIcon from '../assets/image/journalColor.svg'
import calendarIcon from '../assets/image/calendarColor.svg'
import MusicCard from '../components/musicCard'
import StoryCard from '../components/storyCard'
import PopularSongsCard from '../components/popularSongs'
import '../assets/style/homePage.css'
import {Link, useNavigate} from 'react-router-dom'
import {useEffect, useState} from "react";

function HomePages(){
    const nav = useNavigate();

    const [songs, setSongs] = useState(null);
    const [currentSongIndex, setCurrentSongIndex] = useState(null);
    const [audio, setAudio] = useState(null);

    const [stories, setStories] = useState(null);

    const handlePlay = (musicUri, index) => {
        if (audio) {
            audio.pause();
            setAudio(null);
        }

        if (currentSongIndex !== index) {
            const newAudio = new Audio(`https://illumino-api.kakashispiritnews.my.id${musicUri}`);
            newAudio.play();
            setAudio(newAudio);
            setCurrentSongIndex(index);
        } else {
            setCurrentSongIndex(null);
        }
    };
    const getSongs = async () => {
        const response = await fetch('https://illumino-api.kakashispiritnews.my.id/api/song', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async (v) => {
            const resJson = await v.json();

            setSongs(resJson.data)
        });
    }


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
        getSongs();
        getStories();
    }, []);
    return(
        <>
        <div className="homePage-container">
            <div className="homePage-side-container">
                <SideNav/>
            </div>
            <div className="content">
                <div className="homePage-top-content">
                    <p>Welcome to llumino!</p>
                </div>
                <hr />
                <div className="homePage-main-content">
                    <div className="homePage-popular-songs">
                        <h1>Popular Songs</h1>
                        <div className="songs-list">
                            {songs?.map((v, id) => {
                                return (
                                    <MusicCard
                                        key={id}
                                        data={v}
                                        isPlaying={currentSongIndex === id}
                                        onPlay={() => handlePlay(v.music_uri, id)}
                                    />
                                )
                            })}
                        </div>
                    </div> 
                    <div className="homePage-music-content">
                        <div className="music-top-content">
                            <h1>Music</h1>
                            <Link to='/music'>See all</Link>
                        </div>
                        <div className="music-list-content">
                            {songs?.map((v, id) => {
                                return (
                                    <MusicCard
                                        key={id}
                                        data={v}
                                        isPlaying={currentSongIndex === id}
                                        onPlay={() => handlePlay(v.music_uri, id)}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <div className="homePage-story-content">
                        <div className="story-top-content">
                            <h1>Story</h1>
                            <Link to='/story'>See all</Link>
                        </div>
                        <div className="story-list-content">
                            {stories?.map((v, id) => {
                                return (
                                    <StoryCard key={id} data={v}/>
                                )
                            })}
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