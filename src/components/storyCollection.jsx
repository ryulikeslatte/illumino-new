import '../assets/style/storyCollection.css'
import Story from '../assets/image/musicover1.png'
import { Link } from 'react-router-dom'

function storyCollectComp() {
    return(
        <>
        <div className="story-collection">
            <div className="story-cover">
                <img src={Story}/>
            </div>
            <div className="detail-story">
                <p className="title">Track</p>
                <Link to="/story/detail">Read</Link>
            </div>
        </div>
        </>
    )
}

export default storyCollectComp