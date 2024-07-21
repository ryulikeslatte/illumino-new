import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from '../assets/image/app-logo.png';
import HomeIcon from '../assets/image/Group.png';
import SearchIcon from '../assets/image/search-icon.png';
import CalendarIcon from '../assets/image/calendar-icon.png';
import MusicIcon from '../assets/image/music-icon.png';
import StoryIcon from '../assets/image/story-icon.png';
import JournalIcon from '../assets/image/journal-icon.png';
import '../assets/style/sideNav.css';

function SideNav() {
    const location = useLocation();
    const navigate = useNavigate();
    const [activePath, setActivePath] = useState(location.pathname);

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location.pathname]);

    const handleNavClick = (e, path) => {
        e.preventDefault();
        setActivePath(path);
        navigate(path); // Use navigate for navigation
    };

    return (
        <nav className="side-nav">
            <div className="side-nav-container">
                <img src={Logo} alt="" />
                <div className="group-links">
                    <Link to='/homes' onClick={(e) => handleNavClick(e, '/homes')}>
                        <div className={`icon-links ${activePath === '/homes' ? 'active' : ''}`}>
                            <img src={HomeIcon} alt="Home" className="homes-icon" />
                            <p>Home</p>
                        </div>
                    </Link>
                    <Link to='/search' onClick={(e) => handleNavClick(e, '/search')}>
                        <div className={`icon-links ${activePath === '/search' ? 'active' : ''}`}>
                            <img src={SearchIcon} alt="Search" />
                            <p>Search</p>
                        </div>
                    </Link>
                    <Link to='/journal' onClick={(e) => handleNavClick(e, '/journal')}>
                        <div className={`icon-links ${activePath === '/journal' ? 'active' : ''}`}>
                            <img src={JournalIcon} alt="Journal" />
                            <p>Journal</p>
                        </div>
                    </Link>
                    <Link to='/music' onClick={(e) => handleNavClick(e, '/music')}>
                        <div className={`icon-links ${activePath === '/music' ? 'active' : ''}`}>
                            <img src={MusicIcon} alt="Music" />
                            <p>Music</p>
                        </div>
                    </Link>
                    <Link to='/calendar' onClick={(e) => handleNavClick(e, '/calendar')}>
                        <div className={`icon-links ${activePath === '/calendar' ? 'active' : ''}`}>
                            <img src={CalendarIcon} alt="Calendar" />
                            <p>Calendar</p>
                        </div>
                    </Link>
                    <Link to='/story' onClick={(e) => handleNavClick(e, '/story')}>
                        <div className={`icon-links ${activePath === '/story' ? 'active' : ''}`}>
                            <img src={StoryIcon} alt="Story" />
                            <p>Story</p>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default SideNav;
