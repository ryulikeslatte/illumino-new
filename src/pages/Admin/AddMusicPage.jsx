import React, { useState } from 'react';
import AdminSideNav from '../../components/adminSideNav';
import SecondFooter from '../../components/SecondFooter';
import chevronIcon from '../../assets/image/chevron.svg';
import expProfil from '../../assets/image/exp-profil.png';
import PlusIcon from '../../assets/image/plus.png';
import UploadIcon from '../../assets/image/upload.png';
import '../../assets/style/addMusic.css';

function AddMusicPage() {
    const [musicName, setMusicName] = useState('');
    const [duration, setDuration] = useState('');
    const [artist, setArtist] = useState('');
    const [musicFile, setMusicFile] = useState(null);
    const [coverFile, setCoverFile] = useState(null);
    
    const handleCoverFileChange = (e) => {
        setCoverFile(e.target.files[0]);
    }

    const handleMusicFileChange = (e) => {
        setMusicFile(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('cover_image', coverFile);
        formData.append('title', musicName);
        formData.append('duration', duration);
        formData.append('artist', artist);
        formData.append('release_date', '1998-08-14'); // Add your release date here if needed
        formData.append('music_uri', musicFile);

        try {
            const response = await fetch('https://illumino-api.kakashispiritnews.my.id/api/cms/song', {
                method: 'POST',
                body: formData,
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('access')}`
                }
            });

            if (response.ok) {
                console.log('Music added successfully!');
                // Optionally reset the form or show a success message
            } else {
                console.error('Failed to add music.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
            <div className="addMusicPage-container">
                <div className="addMusicPage-side-nav">
                    <AdminSideNav />
                </div>
                <div className="addMusicPage-content">
                    <div className="dashboard-addMusic-top">
                        <div className="back-button-dashboard">
                            <img src={chevronIcon} alt="back" />
                            <p>Create Music</p>
                        </div>
                        <div className="user-profile">
                            <img src={expProfil} alt="user" />
                        </div>
                    </div>
                    <hr />
                    <div className="addMusicPage-core-content">
                        <div className="addMusicCover-field">
                            <img src={PlusIcon} alt="Add Cover" />
                            <p>Add Image</p>
                            <input 
                                type="file"
                                accept="image/*"
                                onChange={handleCoverFileChange}
                                required
                            />
                        </div>
                        <form className="addMusic-forms-content" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder='Add Music Name'
                                value={musicName}
                                onChange={(e) => setMusicName(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder='Add Duration'
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                                required
                            />
                            <div className="uploadMusic-field">
                                <label htmlFor="uploadMusic-field">
                                    <img src={UploadIcon} alt="Upload Music" />
                                </label>
                                <input
                                    type="file"
                                    id="uploadMusic-field"
                                    accept="audio/*"
                                    onChange={handleMusicFileChange}
                                    required
                                />
                            </div>
                            <input
                                type="text"
                                placeholder='Artist'
                                value={artist}
                                onChange={(e) => setArtist(e.target.value)}
                                required
                            />
                            <div className="confirm-button">
                                <button type="submit">Save</button>
                            </div>
                        </form>
                    </div>
                    <div className="addMusicPage-footer">
                        <SecondFooter />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddMusicPage;