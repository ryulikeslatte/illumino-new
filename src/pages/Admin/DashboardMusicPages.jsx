import React, { useState } from 'react';
import DeleteIcon from '../../assets/image/minus-circle.png';
import AdminSideNav from '../../components/adminSideNav';
import SecondFooter from '../../components/SecondFooter';
import chevronIcon from '../../assets/image/chevron.svg';
import expProfil from '../../assets/image/exp-profil.png';
import MusicCover1 from '../../assets/image/tophit1.png';
import StoryCover1 from '../../assets/image/storycover5.png';
import PlusIcon from '../../assets/image/plus.png';
import '../../assets/style/dashboardMusic.css';

function DashboardMusicPages() {
    // State untuk mengontrol visibilitas modal
    const [activeModalId, setActiveModalId] = useState(null);

    // Fungsi untuk menampilkan modal
    const showModal = (id) => setActiveModalId(id);

    // Fungsi untuk menyembunyikan modal
    const hideModal = () => setActiveModalId(null);

    return (
        <>
            <div className="dashboard-music-container">
                <div className="dashboard-music-side-nav">
                    <AdminSideNav />
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
                            {/* Card 1 */}
                            <div className="dashboard-music-card">
                                <p>1</p>
                                <img
                                    src={MusicCover1}
                                    alt="Music Cover"
                                    className='dashboard-music-card-cover'
                                />
                                <div className="dashboard-music-card-detail">
                                    <p>Fire</p>
                                    <p>Artist enjy</p>
                                </div>
                                <p>3:15</p>
                                <img
                                    src={DeleteIcon}
                                    alt="Delete"
                                    onClick={() => showModal(1)} // Tampilkan modal untuk card 1
                                />
                                {activeModalId === 1 && (
                                    <div className="dashboard-music-delete-modal">
                                        <div className="dashboard-music-delete-modal-content">
                                            <p>Delete this Story?</p>
                                            <div className="delete-modal-button-group">
                                                <button onClick={hideModal}>No</button>
                                                <button>Yes</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Card 2 */}
                            <div className="dashboard-music-card">
                                <p>2</p>
                                <img
                                    src={StoryCover1}
                                    alt="Story Cover"
                                    className='dashboard-music-card-cover'
                                />
                                <div className="dashboard-music-card-detail">
                                    <p>Love</p>
                                    <p>Artist raisa</p>
                                </div>
                                <p>4:14</p>
                                <img
                                    src={DeleteIcon}
                                    alt="Delete"
                                    onClick={() => showModal(2)} // Tampilkan modal untuk card 2
                                />
                                {activeModalId === 2 && (
                                    <div className="dashboard-music-delete-modal">
                                        <div className="dashboard-music-delete-modal-content">
                                            <p>Delete this Story?</p>
                                            <div className="delete-modal-button-group">
                                                <button onClick={hideModal}>No</button>
                                                <button>Yes</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Card 3 */}
                            <div className="dashboard-music-card">
                                <p>3</p>
                                <img
                                    src={MusicCover1}
                                    alt="Music Cover"
                                    className='dashboard-music-card-cover'
                                />
                                <div className="dashboard-music-card-detail">
                                    <p>Tree</p>
                                    <p>Artist sal</p>
                                </div>
                                <p>2:15</p>
                                <img
                                    src={DeleteIcon}
                                    alt="Delete"
                                    onClick={() => showModal(3)} // Tampilkan modal untuk card 3
                                />
                                {activeModalId === 3 && (
                                    <div className="dashboard-music-delete-modal">
                                        <div className="dashboard-music-delete-modal-content">
                                            <p>Delete this Story?</p>
                                            <div className="delete-modal-button-group">
                                                <button onClick={hideModal}>No</button>
                                                <button>Yes</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Card 4 */}
                            <div className="dashboard-music-card">
                                <p>4</p>
                                <img
                                    src={StoryCover1}
                                    alt="Story Cover"
                                    className='dashboard-music-card-cover'
                                />
                                <div className="dashboard-music-card-detail">
                                    <p>Hurt</p>
                                    <p>Artist isyana</p>
                                </div>
                                <p>6:15</p>
                                <img
                                    src={DeleteIcon}
                                    alt="Delete"
                                    onClick={() => showModal(4)} // Tampilkan modal untuk card 4
                                />
                                {activeModalId === 4 && (
                                    <div className="dashboard-music-delete-modal">
                                        <div className="dashboard-music-delete-modal-content">
                                            <p>Delete this Story?</p>
                                            <div className="delete-modal-button-group">
                                                <button onClick={hideModal}>No</button>
                                                <button>Yes</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="dashboard-add-button">
                            <img src={PlusIcon} alt="add music" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard-music-footer">
                <SecondFooter />
            </div>
        </>
    );
}

export default DashboardMusicPages;
