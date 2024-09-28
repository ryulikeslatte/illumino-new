import React, { useState, useEffect } from 'react';
import DeleteIcon from '../../assets/image/minus-circle.png';
import AdminSideNav from '../../components/adminSideNav';
import SecondFooter from '../../components/SecondFooter';
import chevronIcon from '../../assets/image/chevron.svg';
import expProfil from '../../assets/image/exp-profil.png';
import EditIcon from '../../assets/image/edit.png';
import PlusIcon from '../../assets/image/plus.png';
import '../../assets/style/dashboardMusic.css';
import {Link, useNavigate} from 'react-router-dom';

function DashboardMusicPages() {
    const nav = useNavigate();
    const accessToken = localStorage.getItem('access');

    const [activeModalId, setActiveModalId] = useState(null);
    const [musicData, setMusicData] = useState([]);

    const fetchMusicData = async () => {
        try {
            const response = await fetch('https://illumino-api.kakashispiritnews.my.id/api/song', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });
            const data = await response.json();
            if (data.status === 'success') {
                setMusicData(data.data);
            }
        } catch (error) {
            console.error('Error fetching music data:', error);
        }
    };

    const showModal = (id) => setActiveModalId(id);
    const hideModal = () => setActiveModalId(null);

    const handleDelete = async (id) => {
        const response = await fetch(`https://illumino-api.kakashispiritnews.my.id/api/cms/song?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (response.status === 200 || response.status === 201) {
            window.alert('Delete success')
            hideModal();
        }
    }

    useEffect(() => {
        fetchMusicData();
    }, []);

    return (
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
                        {musicData.map((music, index) => (
                            <div className="dashboard-music-card" key={music?.id}>
                                <div className="music-content">
                                    <p>{index + 1}</p>
                                    <img
                                        src={`https://illumino-api.kakashispiritnews.my.id${music?.cover_image}`}
                                        alt="Music Cover"
                                        className='dashboard-music-card-cover'
                                    />
                                    <div className="dashboard-music-card-detail">
                                        <p>{music?.title}</p>
                                        <p>Artist {music?.artist}</p>
                                    </div>
                                </div>
                                <div className="music-duration">
                                    <p>{formatDuration(music?.duration)}</p>
                                    <img src={EditIcon} alt="Icon"  onClick={() => nav(`/admin/music/${music?.id}`)} style={{ cursor: 'pointer' }}/>
                                    <img src={DeleteIcon} alt="Delete" onClick={() => showModal(music?.id)} style={{ cursor: 'pointer' }}/>
                                    {activeModalId === music?.id && (
                                        <div className="dashboard-music-delete-modal">
                                            <div className="dashboard-music-delete-modal-content">
                                                <p>Delete this Music?</p>
                                                <div className="delete-modal-button-group">
                                                    <button onClick={hideModal}>No</button>
                                                    <button onClick={() => handleDelete(music?.id)}>Yes</button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="button">
                        <div className="dashboard-add-button">
                            <Link to='/admin/music/add'><img src={PlusIcon} alt="add music" /></Link>
                        </div>
                    </div>
                </div>
                <div className="dashboard-music-footer">
                    <SecondFooter />
                </div>
            </div>
        </div>
    );
}

function formatDuration(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export default DashboardMusicPages;