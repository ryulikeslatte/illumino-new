import AdminSideNav from '../../components/adminSideNav'
import SecondFooter from '../../components/SecondFooter'
import expProfil from '../../assets/image/exp-profil.png'
import MusicIcon from '../../assets/image/dashicon-one.png'
import StoryIcon from '../../assets/image/dashicon-two.png'
import UsersIcon from '../../assets/image/dashicon-three.png'
import { Link } from "react-router-dom";
import '../../assets/style/dashboardAdmin.css'

function DashboardAdminPages() {
    return (
        <>
            <div className="dashboard-admin-container">
                <div className="dashboard-admin-sideNav">
                    <AdminSideNav />
                </div>
                <div className="dashboard-admin-content">
                    <div className="dashboard-admin-top">
                        <h1>Hello, good evening Admin!</h1>
                        <div className="user-profile">
                            <img src={expProfil} alt="user" />
                        </div>
                    </div>
                    <hr />
                    <div className="dashboard-admin-core-content">
                        <h2>Dashboard</h2>
                        <div className="dashboard-core-content-group-button">
                            <Link to='/admin/music'><div className="dashboard-core-content-button music-links-button">
                                <img src={MusicIcon} alt="Music" />
                                <p>Music</p>
                            </div>
                            </Link>
                            <Link to='/admin/story'><div className="dashboard-core-content-button story-links-button">
                                <img src={StoryIcon} alt="Story" />
                                <p>Music</p>
                            </div>
                            </Link>

                            <Link to='/admin/users'>
                                <div className="dashboard-core-content-button users-links-button">
                                    <img src={UsersIcon} alt="Users" />
                                    <p>Users</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
            <div className="dashboard-admin-footer">
            </div>
            <SecondFooter />
        </>
    );
}

export default DashboardAdminPages;