import '../assets/style/musicCard.css'
import MusicCover5 from '../assets/image/musicover1.png'
import PlayButton from '../assets/image/play-button.svg'

function musicCardComp() {
    return(
        <>
        <div className="music-card-container">
            <div className="music-list-content-card-detail">
                <img src={MusicCover5} alt="Music Cover" className='cover'/>
                <div className="card-info">
                    <p>Coups</p>
                    <p>4:20</p>
                    <img src={PlayButton} alt="play button" />
                </div>
            </div>
        </div>
        </>
    )
}

export default musicCardComp