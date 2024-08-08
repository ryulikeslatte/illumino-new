import React, { useState } from 'react';
import DeleteIcon from '../../assets/image/Delete.png';
import AdminSideNav from '../../components/adminSideNav';
import SecondFooter from '../../components/SecondFooter';
import chevronIcon from '../../assets/image/chevron.svg';
import expProfil from '../../assets/image/exp-profil.png';
import expProfil2 from '../../assets/image/exp-profil2.png';
import '../../assets/style/dashboardUsers.css';

function DashboardUsersPages() {
    // State untuk mengontrol visibilitas modal
    const [activeModalId, setActiveModalId] = useState(null);

    // Fungsi untuk menampilkan modal
    const showModal = (id) => setActiveModalId(id);

    // Fungsi untuk menyembunyikan modal
    const hideModal = () => setActiveModalId(null);

    return (
        <>
        <div className="dashboard-users-container">
            <div className="dashboard-users-side-nav">
                <AdminSideNav />
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
                        {/* Card 1 */}
                        <div className="dashboard-users-card">
                            <div className="users-content">
                                <p>1</p>
                                <img src={expProfil} alt="User Profile" className='dashboard-users-card-cover' />
                                <div className="dashboard-users-card-detail">
                                    <p>Arinza</p>
                                    <p>Email : arinza@gmail.com</p>
                                    <p>Password : ***********</p>
                                </div>
                            </div>
                            <div className="delete-button">
                                <img src={DeleteIcon} alt="Delete" onClick={() => showModal(1)}/>
                                {activeModalId === 1 && (
                                    <div className="dashboard-users-delete-modal">
                                        <div className="dashboard-users-delete-modal-content">
                                            <p>Delete this User?</p>
                                            <div className="delete-modal-button-group">
                                                <button onClick={hideModal}>No</button>
                                                <button>Yes</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="dashboard-users-card">
                            <div className="users-content">
                                <p>2</p>
                                <img src={expProfil2} alt="User Profile" className='dashboard-users-card-cover' />
                                <div className="dashboard-users-card-detail">
                                    <p>Dewi</p>
                                    <p>Email : adew@gmail.com</p>
                                    <p>Password : ***********</p>
                                </div>
                            </div>
                            <div className="delete-button">
                                <img src={DeleteIcon} alt="Delete" onClick={() => showModal(2)}/>
                                {activeModalId === 2 && (
                                    <div className="dashboard-users-delete-modal">
                                        <div className="dashboard-users-delete-modal-content">
                                            <p>Delete this User?</p>
                                            <div className="delete-modal-button-group">
                                                <button onClick={hideModal}>No</button>
                                                <button>Yes</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-users-footer">
                    <SecondFooter />
                </div>
            </div>
        </div>
        </>
    );
}

export default DashboardUsersPages;
