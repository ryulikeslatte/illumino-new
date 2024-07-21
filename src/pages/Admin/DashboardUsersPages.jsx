import DeleteIcon from '../../assets/image/Delete.png'
import AdminSideNav from '../../components/adminSideNav'
import SecondFooter from '../../components/SecondFooter'
import chevronIcon from '../../assets/image/chevron.svg'
import expProfil from '../../assets/image/exp-profil.png'
import expProfil2 from '../../assets/image/exp-profil2.png'
import '../../assets/style/dashboardUsers.css'


function DashboardUsersPages(){
    return(
        <>
        <div className="dashboard-users-container">
            <div className="dashboard-users-side-nav">
                <AdminSideNav/>
            </div>
            <div className="dashboard-users-content">
                <div className="dashboard-users-top">
                    <div className="back-button-dashboard">
                        <img src={chevronIcon} alt="back" />
                        <p>Users</p>
                    </div>
                    <div className="user-profile">
                        <img src={expProfil} alt="user" />
                    </div>
                </div>
                <hr />
                <div className="dashboard-users-core-content">
                    <div className="dashboard-users-list-content">
                        <div className="dashboard-users-card">
                            <p>1</p>
                            <img src={expProfil} alt="User Profile" className='dashboard-users-card-cover'/>
                            <div className="dashboard-users-card-detail">
                                <p>Arinza</p>
                                <p>Email : arinza@gmail.com</p>
                                <p>Password : ***********</p>
                            </div>
                            <img src={DeleteIcon} alt="Delete" />
                        </div>
                        <div className="dashboard-users-card">
                            <p>2</p>
                            <img src={expProfil2} alt="User Profile" className='dashboard-users-card-cover'/>
                            <div className="dashboard-users-card-detail">
                                <p>Dewi</p>
                                <p>Email : adew@gmail.com</p>
                                <p>Password : ***********</p>
                            </div>
                            <img src={DeleteIcon} alt="Delete" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="dashboard-users-footer">
            <SecondFooter/>
        </div>
        </>
    );
}

export default DashboardUsersPages;