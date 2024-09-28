import '../assets/style/journalCard.css'
import {truncateContent} from "../utils/text.js";

function JournalCardComp({data}) {
    return(
        <>
        <div className="card-journal">
            <p  className="title">{data?.title}</p>
            <p className='journal-content'>{data?.author}</p>
            <p className='journal-content'>{truncateContent(data?.content)}</p>
        </div>
        </>
    );
}

export default JournalCardComp;