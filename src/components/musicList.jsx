import '../assets/style/musicList.css'
import MusicCover1 from '../assets/image/musicover1.png'
import PlayButton from '../assets/image/play-button.svg'

function musicListComp() {
    return(
        <>
        <div className="music-card">
            <div className="music-content">
                <p>1</p>
                <img src={MusicCover1}/>
                <div className="detail">
                    <p>Fire</p>
                    <p>Artist enjy</p>
                </div>
                
            </div>
            <div className="music-duration">
                <p>3.15</p>
                <img src={PlayButton}/>
            </div>
        </div>
        </>
    )
}

export default musicListComp