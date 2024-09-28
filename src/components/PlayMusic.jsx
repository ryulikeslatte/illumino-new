import '../assets/style/playMusic.css'
import PlayButton from '../assets/image/play-button.svg';
import RepeatButton from '../assets/image/repeat.png';
import ShuffleButton from '../assets/image/shuffle.png';
import PreviousButton from '../assets/image/previous.png';
import PlayButton2 from '../assets/image/play.png';
import NextButton from '../assets/image/next.png';
import MusicBar from '../assets/image/music-bar.png';
import PauseButton from '../assets/image/pause.png'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {formatDuration} from "../utils/text.js";


const PlayMusic = ({ data }) => {
    const [audio, setAudio] = useState(null);
    const [isPlayed, setIsPlayed] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const handlePlay = () => {
        setIsPlayed(true);
        if (audio === null) {
            const newAudio = new Audio(`https://illumino-api.kakashispiritnews.my.id${data.music_uri}`);
            setAudio(newAudio);
            newAudio.play();

            newAudio.addEventListener("loadedmetadata", () => {
                setDuration(newAudio.duration);
            });

            newAudio.addEventListener("timeupdate", () => {
                setCurrentTime(newAudio.currentTime);
            });
        } else {
            audio.play();
        }
    };

    const handlePause = () => {
        setIsPlayed(false);
        if (audio) {
            audio.pause();
        }
    };



    const handleSeek = (event) => {
        const seekTime = (event.target.value / 100) * duration;
        if (audio) {
            audio.currentTime = seekTime;
        }
    };

    useEffect(() => {
        setDuration(data?.duration)
    }, [data]);

    return (
        <>
            <div className="button-content">
                <div className="button-main">
                    <div className="detail-music">
                        <p className="title">{data?.title}</p>
                        <p>{data?.artist}</p>
                    </div>
                    <div className="button">
                        <img src={RepeatButton} />
                        <img src={PreviousButton} />
                        <img
                            src={isPlayed ? PauseButton : PlayButton2}
                            className="play"
                            onClick={isPlayed ? handlePause : handlePlay}
                            style={{ cursor: "pointer" }}
                        />
                        <img src={NextButton} />
                        <img src={ShuffleButton} />
                    </div>
                    <div className="mode">
                        <label className="container-mode">
                            Meditation Mode
                            <input type="checkbox" checked="checked" />
                        </label>
                    </div>
                </div>

                <div className="bar-duration">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={duration ? (currentTime / duration) * 100 : 0}
                        onChange={handleSeek}
                        className="progress-bar"
                    />
                </div>

                <div className="time-display">
                    <span>{formatDuration(currentTime)}</span> / <span>{formatDuration(duration)}</span>
                </div>
            </div>
        </>
    );
};

export default PlayMusic;