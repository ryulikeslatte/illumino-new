import DeleteIcon from '../../assets/image/minus-circle.png'
import AdminSideNav from '../../components/adminSideNav'
import SecondFooter from '../../components/SecondFooter'
import chevronIcon from '../../assets/image/chevron.svg'
import expProfil from '../../assets/image/exp-profil.png'
import MusicCover1 from '../../assets/image/tophit1.png'
import StoryCover1 from '../../assets/image/storycover5.png'
import PlusIcon from '../../assets/image/plus.png'
import '../../assets/style/dashboardMusic.css'


function DashboardMusicPages(){
    return(
        <>
        <div className="dashboard-music-container">
            <div className="dashboard-music-side-nav">
                <AdminSideNav/>
            </div>
            <div className="dashboard-music-content">
                <div className="dashboard-music-top">
                    <div className="back-button-dashboard">
                        <img src={chevronIcon} alt="back" />
                        <p>Music</p>
                    </div>
                    <div className="user-profile">
                        <img src={expProfil} alt="user" />
                    </div>
                </div>
                <hr />
                <div className="dashboard-music-core-content">
                    <div className="dashboard-music-list-content">
                        <div className="dashboard-music-card">
                            <p>1</p>
                            <img src={MusicCover1} alt="Music Cover" className='dashboard-music-card-cover'/>
                            <div className="dashboard-music-card-detail">
                                <p>Fire</p>
                                <p>Artist enjy</p>
                            </div>
                            <p>3:15</p>
                            <img src={DeleteIcon} alt="Delete" />
                        </div>
                        <div className="dashboard-music-card">
                            <p>2</p>
                            <img src={StoryCover1} alt="Story Cover" className='dashboard-music-card-cover'/>
                            <div className="dashboard-music-card-detail">
                                <p>Love</p>
                                <p>Artist raisa</p>
                            </div>
                            <p>4:14</p>
                            <img src={DeleteIcon} alt="Delete" />
                        </div>
                        <div className="dashboard-music-card">
                            <p>3</p>
                            <img src={MusicCover1} alt="Music Cover" className='dashboard-music-card-cover'/>
                            <div className="dashboard-music-card-detail">
                                <p>Tree</p>
                                <p>Artist sal</p>
                            </div>
                            <p>2:15</p>
                            <img src={DeleteIcon} alt="Delete" />
                        </div>
                        <div className="dashboard-music-card">
                            <p>4</p>
                            <img src={StoryCover1} alt="Story Cover" className='dashboard-music-card-cover'/>
                            <div className="dashboard-music-card-detail">
                                <p>Hurt</p>
                                <p>Artist isyana</p>
                            </div>
                            <p>6:15</p>
                            <img src={DeleteIcon} alt="Delete" />
                        </div>
                    </div>
                    <div className="dashboard-add-button">
                        <img src={PlusIcon} alt="add music" />
                    </div>
                </div>
            </div>
        </div>
        <div className="dashboard-music-footer">
            <SecondFooter/>
        </div>
        </>
    );
}

export default DashboardMusicPages;