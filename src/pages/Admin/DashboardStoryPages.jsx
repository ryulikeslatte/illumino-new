import React, {useEffect, useState} from 'react';
import AdminSideNav from '../../components/adminSideNav';
import SecondFooter from '../../components/SecondFooter';
import chevronIcon from '../../assets/image/chevron.svg';
import expProfil from '../../assets/image/exp-profil.png';
import PlusIcon from '../../assets/image/plus.png';
import StoryCover1 from '../../assets/image/storycover9.png';
import StoryCover2 from '../../assets/image/storycover10.png';
import StoryCover3 from '../../assets/image/storycover11.png';
import StoryCover4 from '../../assets/image/storycover4.png';
import '../../assets/style/dashboardStory.css';
import {Link, useNavigate} from 'react-router-dom';

function DashboardStoryPages() {
    const nav = useNavigate();

    const [stories, setStories] = useState(null);

    const handleDelete = async (id) => {
        await fetch(`https://illumino-api.kakashispiritnews.my.id/api/cms/story?${id}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('access')}`
            }
        }).then(async (v) => {
            if (v.status === 200 || v.status === 201) {
                hideModal()
                await getStories()
            }
        })
    }

    const getStories = async () => {
        await fetch(`https://illumino-api.kakashispiritnews.my.id/api/cms/story`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('access')}`
            }
        }).then(async (v) => {
            if (v.status === 200 || v.status === 201) {
                const response = await v.json();
                setStories(response.data)
            }
        });
    }

    // State untuk mengontrol visibilitas modal
    const [activeModalId, setActiveModalId] = useState(null);

    // Fungsi untuk menampilkan modal
    const showModal = (id) => setActiveModalId(id);

    // Fungsi untuk menyembunyikan modal
    const hideModal = () => setActiveModalId(null);

    useEffect(() => {
        getStories()
    }, []);

    return (
        <>
        <div className="dashboard-story-container">
            <div className="dashboard-story-side-nav">
                <AdminSideNav />
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
                        {stories?.map((v, id) => {
                            return (
                                <div className="dashboard-story-card">
                                    <img src={`https://illumino-api.kakashispiritnews.my.id${v?.image}`} alt="Story Cover"/>
                                    <div className="dashboard-story-card-detail">
                                        <h2>{v?.title}</h2>
                                        <div className="button-group">
                                            <button style={{ cursor: 'pointer' }} onClick={() => nav(`/admin/story/${v?.id}`)}>Edit</button>
                                            <button className="dashboard-story-delete-button" style={{ cursor: 'pointer' }}
                                                    onClick={() => showModal(1)}>Delete
                                            </button>
                                            {activeModalId === 1 && (
                                                <div className="dashboard-story-delete-modal">
                                                    <div className="dashboard-story-delete-modal-content">
                                                        <p>Delete this Story?</p>
                                                        <div className="delete-modal-button-group">
                                                            <button onClick={hideModal}>No</button>
                                                            <button onClick={() => handleDelete(v?.id)}>Yes</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="dashboard-story-button">
                        <div className="dashboard-add-button">
                            <Link to='/admin/story/add'><img src={PlusIcon} alt="add story" /></Link>
                        </div>
                    </div>
                </div>
                <div className="dashboard-story-footer">
                    <SecondFooter />
                </div>
            </div>
        </div>
        </>
    );
}

export default DashboardStoryPages;
