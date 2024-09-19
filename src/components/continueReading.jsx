import '../assets/style/continueReading.css'
import Story from '../assets/image/musicover1.png'

function continueReadComp() {
    return(
        <>
        <div className="story-card">
            <div className="story-cover">
                <img src={Story}/>
            </div>
            <div className="detail-story">
                <p className="title">Track</p>
                <div className="continue-read">
                    <p>Continue Reading</p>
                    <p className="percentage">30% Completed</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default continueReadComp