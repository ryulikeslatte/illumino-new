import '../assets/style/musicList.css'
import MusicCover1 from '../assets/image/musicover1.png'
import PlayButton from '../assets/image/play-button.svg'
import {formatDuration} from "../utils/text.js";
import PauseButton from "../assets/image/pause.png";
import PlayButton2 from "../assets/image/play.png";

function musicListComp({ data, isPlaying, onPlay }) {
    return(
        <>
        <div className="music-card">
            <div className="music-content">
                <p>1</p>
                <img src={`https://illumino-api.kakashispiritnews.my.id${data?.cover_image}`}/>
                <div className="detail">
                    <p>{data?.title}</p>
                    <p>{data?.artist}</p>
                </div>
                
            </div>
            <div className="music-duration">
                <p>{formatDuration(data?.duration)}</p>
                <img
                    src={isPlaying ? PauseButton : PlayButton}
                    onClick={onPlay}
                    style={{ cursor: "pointer" }}
                />
            </div>
        </div>
        </>
    )
}

export default musicListComp