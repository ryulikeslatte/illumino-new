import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from '../assets/image/logo-illumino.png';
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
                    <Link to='/admin/dashboard' onClick={(e) => handleNavClick(e, '/admin/dashboard')}>
                        <div className={`admin-icon-links ${activePath === '/admin/dashboard' ? 'active' : ''}`}>
                            <img src={HomeIcon} alt="Home" className="homes-icon" />
                            <p>Dashboard</p>
                        </div>
                    </Link>
                    <Link to='/admin/music' onClick={(e) => handleNavClick(e, '/admin/music')}>
                        <div className={`admin-icon-links ${activePath === '/admin/music' ? 'active' : ''}`}>
                            <img src={MusicIcon} alt="Music" />
                            <p>Music</p>
                        </div>
                    </Link>
                    <Link to='/admin/story' onClick={(e) => handleNavClick(e, '/admin/story')}>
                        <div className={`admin-icon-links ${activePath === '/admin/story' ? 'active' : ''}`}>
                            <img src={StoryIcon} alt="Story" />
                            <p>Story</p>
                        </div>
                    </Link>
                    <Link to='/admin/users' onClick={(e) => handleNavClick(e, '/admin/users')}>
                        <div className={`admin-icon-links ${activePath === '/admin/users' ? 'active' : ''}`}>
                            <img src={UsersIcon} alt="User" />
                            <p>Users</p>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default SideNav;
