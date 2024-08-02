import SecondFooter from "../components/SecondFooter";
import chevronIcon from '../assets/image/chevron.svg';
import expProfil from '../assets/image/exp-profil.png';
import SideNav from '../components/sideNav'
import '../assets/style/detailStory.css';
import storyCover from '../assets/image/detailStory.png';
import speakerLogo from '../assets/image/speaker.png';


function DetailStory() {
    return (
        <>
        <div className="container">
            <div className="sidebar">
                <SideNav />
            </div>
            <div className="main">
                <div className="journalPages-core-top-content">
                    <div className="back-button-journalPages">
                        <img src={chevronIcon} alt="back" />
                        <p>Story</p>
                    </div>
                    <div className="user-profile">
                        <img src={expProfil} alt="user" />
                    </div>
                </div>
                <div className="main-content">
                    <img src={storyCover}/>
                    <div className="story-content">
                        <div className="title-section">
                            <p className="title">Reflection of the Soul</p>
                            <p className="artist">Erna Swiss</p>
                            <a href='/story'><img src={speakerLogo}/></a> 
                            {/* PERHATIKAN LINKNYA  */}
                        </div>
                        <div className="story">
                            <p>In a dimly lit bedroom, a woman named Laras stood in front of a 
                                large mirror. Her sparkling red dress contrasted with the dim 
                                light, framing her tall, slender figure. Her long black hair was 
                                loose, framing her beautiful face with sharp eyes. In her hand, she 
                                held a dark red lipstick, ready to be smeared on her thin lips.<br/><br/>L
                                aras stared at her reflection in the mirror with an expression that was 
                                hard to read. There was a mixture of sadness, anger, and confusion in 
                                his eyes. He felt trapped in a life full of lies and falsehood. Laras 
                                felt alone and empty. He has lost his identity and purpose in life. 
                                He longs to be free, to be himself, and to feel true happiness.<br/><br/>On 
                                Laras&apos; dressing table, there was an open medicine pill bottle. 
                                The pills had always been his loyal companion to relieve his pain and 
                                loneliness. He was often tempted to swallow the pills and end it all.<br/><br/>
                                However, Laras still has a glimmer of hope. He still wants to live and feel 
                                happiness. Laras put her lipstick on the dressing table and stared at her ref
                                lection in the mirror with new determination. He will no longer allow himself to 
                                be shackled by lies and falsehood. He will look for a way out and find true 
                                happiness. confusion in his eyes. He felt trapped in a life full of lies and 
                                falsehood. Laras felt alone and empty. He has lost his identity and purpose 
                                in life. He longs to be free, to be himself, and to feel true happiness.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default DetailStory;