import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from '../assets/image/app-logo.png';
import HomeIcon from '../assets/image/Group.png';
import MusicIcon from '../assets/image/music-icon.png';
import StoryIcon from '../assets/image/story-icon.png';
import UsersIcon from '../assets/image/users-icon.png';
import '../assets/style/adminSideNav.css';

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
        navigate(path);
    };

    return (
        <nav className="admin-side-nav">
            <div className="admin-side-nav-container">
                <img src={Logo} alt="" />
                <div className="admin-group-links">
                    <div className={`admin-icon-links ${activePath === '/admin/dashboard' ? 'active' : ''}`}>
                        <img src={HomeIcon} alt="Home" className="homes-icon" />
                        <Link to='/admin/dashboard' onClick={(e) => handleNavClick(e, '/admin/dashboard')}><p>Dashboard</p></Link>
                    </div>
                    <div className={`admin-icon-links ${activePath === '/admin/music' ? 'active' : ''}`}>
                        <img src={MusicIcon} alt="Music" />
                        <Link to='/admin/music' onClick={(e) => handleNavClick(e, '/admin/music')}><p>Music</p></Link>
                    </div>
                    <div className={`admin-icon-links ${activePath === '/admin/story' ? 'active' : ''}`}>
                        <img src={StoryIcon} alt="Story" />
                        <Link to='/admin/story' onClick={(e) => handleNavClick(e, '/admin/story')}><p>Story</p></Link>
                    </div>
                    <div className={`admin-icon-links ${activePath === '/admin/users' ? 'active' : ''}`}>
                        <img src={UsersIcon} alt="User" />
                        <Link to='/admin/users' onClick={(e) => handleNavClick(e, '/admin/users')}><p>Users</p></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default SideNav;
