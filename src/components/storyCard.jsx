import '../assets/style/storyCard.css'
import StoryCover3 from '../assets/image/musicover1.png'

function storyCardComp() {
    return(
        <>
        <div className="story-card-container">
            <div className="story-list-content-card-detail">
                <img src={StoryCover3} alt="story Cover" className='cover'/>
                <div className="card-info">
                    <p>Adventure Night</p>
                    <p className='duration'>4:20</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default storyCardComp