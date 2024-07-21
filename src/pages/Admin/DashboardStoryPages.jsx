import AdminSideNav from '../../components/adminSideNav'
import SecondFooter from '../../components/SecondFooter'
import chevronIcon from '../../assets/image/chevron.svg'
import expProfil from '../../assets/image/exp-profil.png'
import PlusIcon from '../../assets/image/plus.png'
import StoryCover1 from '../../assets/image/storycover9.png'
import StoryCover2 from '../../assets/image/storycover10.png'
import StoryCover3 from '../../assets/image/storycover11.png'
import StoryCover4 from '../../assets/image/storycover4.png'
import '../../assets/style/dashboardStory.css'


function DashboardStoryPages(){
    return(
        <>
        <div className="dashboard-story-container">
            <div className="dashboard-story-side-nav">
                <AdminSideNav/>
            </div>
            <div className="dashboard-story-content">
                <div className="dashboard-story-top">
                    <div className="back-button-dashboard">
                        <img src={chevronIcon} alt="back" />
                        <p>Story</p>
                    </div>
                    <div className="user-profile">
                        <img src={expProfil} alt="user" />
                    </div>
                </div>
                <hr />
                <div className="dashboard-story-core-content">
                    <div className="dashboard-story-content-list">
                        <div className="dashboard-story-card">
                            <img src={StoryCover1} alt="Story Cover" />
                            <div className="dashboard-story-card-detail">
                                <h2>Reflection of the soul</h2>
                                <button>Delete</button>
                            </div>
                        </div>
                        <div className="dashboard-story-card">
                            <img src={StoryCover2} alt="Story Cover" />
                            <div className="dashboard-story-card-detail">
                                <h2>Afternoon</h2>
                                <button>Delete</button>
                            </div>
                        </div>
                        <div className="dashboard-story-card">
                            <img src={StoryCover3} alt="Story Cover" />
                            <div className="dashboard-story-card-detail">
                                <h2>Men N dog</h2>
                                <button>Delete</button>
                            </div>
                        </div>
                        <div className="dashboard-story-card">
                            <img src={StoryCover4} alt="Story Cover" />
                            <div className="dashboard-story-card-detail">
                                <h2>Sunset</h2>
                                <button>Delete</button>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-add-button">
                        <img src={PlusIcon} alt="add story" />
                    </div>
                </div>
            </div>
        </div>
        <div className="dashboard-story-footer">
            <SecondFooter/>
        </div>
        </>
    );
}

export default DashboardStoryPages;