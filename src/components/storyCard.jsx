import '../assets/style/storyCard.css'
import StoryCover3 from '../assets/image/musicover1.png'
import {truncateContent} from "../utils/text.js";
import {useNavigate} from "react-router-dom";

function StoryCardComp({data}) {
    const nav = useNavigate();

    return(
        <>
        <div className="story-card-container">
            <div className="story-list-content-card-detail">
                <img
                    src={`https://illumino-api.kakashispiritnews.my.id${data?.image}`}
                    alt="story Cover"
                    className='cover'
                    onClick={() => {
                        nav(`/story/${data?.id}`)
                    }}
                    style={{ cursor: 'pointer' }}
                />
                <div className="card-info">
                    <p>{data?.title}</p>
                    <p>{data?.author}</p>
                    <p className='duration'>{truncateContent(data?.content)}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default StoryCardComp