import '../assets/style/storyCollection.css'
import Story from '../assets/image/musicover1.png'
import {Link, useNavigate} from 'react-router-dom'

function StoryCollectComp({data}) {
    const nav = useNavigate();
    return(
        <>
        <div className="story-collection">
            <div className="story-cover">
                <img src={`https://illumino-api.kakashispiritnews.my.id${data?.image}`} style={{ backgroundSize: 'cover', height: '340px' }}/>
                {/*<img src={Story}/>*/}
            </div>
            <div className="detail-story">
                <p className="title">{data?.title}</p>
                <Link onClick={() => nav(`/story/${data?.id}`)} style={{ cursor: 'pointer' }}>Read</Link>
            </div>
        </div>
        </>
    )
}

export default StoryCollectComp