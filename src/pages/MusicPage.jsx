import SecondFooter from "../components/SecondFooter";
import chevronIcon from '../assets/image/chevron.svg';
import expProfil from '../assets/image/exp-profil.png';
import SideNav from '../components/sideNav'
import '../assets/style/musicPage.css';
import MusicList from '../components/musicList';
import {useEffect, useState} from "react";


function MusicPage() {
    const [musics, setMusics] = useState(null);
    const [currentSongIndex, setCurrentSongIndex] = useState(null);
    const [audio, setAudio] = useState(null);

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

    const getMusics = async () => {
        const response = await fetch('https://illumino-api.kakashispiritnews.my.id/api/song', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async (v) => {
            const resJson = await v.json();

            setMusics(resJson.data)
        });
    }

    useEffect(() => {
        getMusics()
    }, []);

    return (
        <>
        <div className="container">
            <div className="sidebar">
                <SideNav />
            </div>
            <div className="main">
                <div className="musicPage-core-top-content">
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
                    {musics?.map((v, id) => {
                       return (
                           <MusicList
                               key={id}
                               data={v}
                               isPlaying={currentSongIndex === id}
                               onPlay={() => handlePlay(v.music_uri, id)}
                           />
                       )
                    })}
                </div>
                <div className="journalPages-footer-container">
                    <SecondFooter/>
                </div>
            </div>
        </div>
        </>
    );
}

export default MusicPage;