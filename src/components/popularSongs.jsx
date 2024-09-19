import '../assets/style/popularSongs.css'
import MusicCover1 from '../assets/image/tophit2.png'
import PlayButton from '../assets/image/play-button.svg'

function popularSongComp() {
    return(
        <>
        <div className="popular-songs-container">
            <div classNa3qame="songs-card-detail">
                <img src={MusicCover1} alt="music cover" className='cover' />
                <div className="card-info">
                    <p>Top hit 1</p>
                    <p>3:45</p>
                    <img src={PlayButton} alt=""/>
                </div>  
            </div>
        </div>
        </>
    )
}

export default popularSongComp;