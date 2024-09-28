import '../assets/style/continueReading.css'
import Story from '../assets/image/musicover1.png'

function continueReadComp({data}) {
    return(
        <>
        <div className="story-card">
            <div className="story-cover">
                <img src={`https://illumino-api.kakashispiritnews.my.id${data?.image}`} style={{ backgroundSize: 'cover', height: '340px' }}/>
            </div>
            <div className="detail-story">
                <p className="title">{data?.title}</p>
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