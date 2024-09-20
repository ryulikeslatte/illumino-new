import '../assets/style/playMusic.css'
import PlayButton from '../assets/image/play-button.svg';
import RepeatButton from '../assets/image/repeat.png';
import ShuffleButton from '../assets/image/shuffle.png';
import PreviousButton from '../assets/image/previous.png';
import PlayButton2 from '../assets/image/play.png';
import NextButton from '../assets/image/next.png';
import MusicBar from '../assets/image/music-bar.png';


function PlayMusicComp() {
    return(
        <>
        <div className="button-content">
            <div className="button-main">
                <div className="detail-music">
                    <p className="title">Love the Bubble</p>
                    <p>Play from music album</p>
                </div>
                <div className="button">
                    <img src={RepeatButton} />
                    <img src={PreviousButton} />
                    <img src={PlayButton2} className="play"/>
                    <img src={NextButton} />
                    <img src={ShuffleButton} />
                </div>
                <div className="mode">                        
                    <label class="container-mode">Meditation Mode
                        <input type="checkbox" checked="checked"/>
                    </label>
                </div>
            </div>
                <div className="bar-duration">
                <img src={MusicBar} className="duration"/>
            </div>
        </div>
        </>
    );
}

export default PlayMusicComp;