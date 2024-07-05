import {Link} from "react-router-dom"
import Logo from '../assets/image/app-logo.png'
import HomeIcon from '../assets/image/Group.svg'
import SearchIcon from '../assets/image/search-icon.png'
import CalendarIcon from '../assets/image/calendar-icon.png'
import MusicIcon from '../assets/image/music-icon.png'
import StoryIcon from '../assets/image/story-icon.png'
import JournalIcon from '../assets/image/journal-icon.png'
import '../assets/style/sideNav.css'

function sideNav(){
    return(
        <nav className="side-nav">
            <div className="side-nav-container">
                <img src={Logo} alt="" />
                <div className="group-links">
                    <div className="icon-links active">
                        <img src={HomeIcon} alt="Home" className="homes-icon"/>
                        <p>Home</p>
                    </div>
                    <div className="icon-links">
                        <img src={SearchIcon} alt="Search" />
                        <p>Search</p>
                    </div>
                    <div className="icon-links">
                        <img src={JournalIcon} alt="Journal" />
                        <p>Journal</p>
                    </div>
                    <div className="icon-links">
                        <img src={MusicIcon} alt="Music" />
                        <p>Music</p>
                    </div>
                    <div className="icon-links">
                        <img src={CalendarIcon} alt="Calendar" />
                        <p>Calendar</p>
                    </div>
                    <div className="icon-links">
                        <img src={StoryIcon} alt="Story" />
                        <p>Story</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default sideNav