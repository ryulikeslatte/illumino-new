import '../assets/style/musicCard.css'
import MusicCover5 from '../assets/image/musicover1.png'
import PlayButton from '../assets/image/play-button.svg'
import PauseButton from "../assets/image/pause.png";
import {useNavigate} from "react-router-dom";
import {formatDuration} from "../utils/text.js";

function MusicCardComp({ data, isPlaying, onPlay }) {
    const nav = useNavigate();

    return (
        <div className="popular-songs-container">
            <div className="songs-card-detail">
                <img
                    src={`https://illumino-api.kakashispiritnews.my.id${data?.cover_image}`}
                    alt="music cover"
                    className="cover"
                    onClick={() => {
                        nav(`/music/play/${data?.id}`)
                    }}
                    style={{ cursor: 'pointer' }}
                />
                <div className="card-info">
                    <p>{data?.title}</p>
                    <p>{formatDuration(data?.duration)}</p>
                    <img
                        src={isPlaying ? PauseButton : PlayButton}
                        alt="Play button"
                        style={{ cursor: 'pointer' }}
                        onClick={onPlay}
                    />
                </div>
            </div>
        </div>
    );
}

export default MusicCardComp