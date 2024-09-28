import AdminSideNav from '../../components/adminSideNav'
import SecondFooter from '../../components/SecondFooter'
import chevronIcon from '../../assets/image/chevron.svg'
import expProfil from '../../assets/image/exp-profil.png'
import PlusIcon from '../../assets/image/plus.png'
import UploadIcon from '../../assets/image/upload.png'
import '../../assets/style/updateMusic.css'
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {formatDuration} from "../../utils/text.js";

function AddMusicPage(){
    const {id} = useParams();
    const [music, setMusic] = useState(null);

    const getMusic = async () => {
        await fetch(`https://illumino-api.kakashispiritnews.my.id/api/cms/song?id=${id}`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('access')}`
            }
        }).then(async (v) => {
            if (v.status === 200 || v.status === 201) {
                const response = await v.json();
                setMusic(response.data)
            }
        });
    }

    const handleChange = (e) => {
        setMusic({
            ...music,
            [`${e.target.name}`]: e.target.name === 'music_uri' || e.target.name === 'cover_image' ? e.target.files[0] : e.target.value
        })
    }

    const handleSave = async () => {
        const formData = new FormData();
        formData.append('cover_image', music?.cover_image);
        formData.append('title', music?.title);
        formData.append('duration', music?.duration);
        formData.append('artist', music?.artist);
        formData.append('release_date', '1998-08-14'); // Add your release date here if needed
        formData.append('music_uri', music?.music_uri);

        await fetch(`https://illumino-api.kakashispiritnews.my.id/api/cms/song?id=${id}`, {
            method: 'PATCH',
            body: formData,
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('access')}`
            }
        }).then(async (v) => {
            if (v.status === 200 || v.status === 201) {
                const response = await v.json();
                // setMusic(response.data)
                window.alert('Update successfuly')
            }
        });
    }

    useEffect(() => {
        getMusic()
    }, []);

    return(
        <>
        <div className="updateMusicPage-container">
            <div className="updateMusicPage-side-nav">
                <AdminSideNav/>
            </div>
            <div className="updateMusicPage-content">
                <div className="dashboard-updateMusic-top">
                    <div className="back-button-dashboard" style={{ cursor: 'pointer' }}>
                        <img src={chevronIcon} alt="back" />
                        <p>Update Music</p>
                    </div>
                    <div className="user-profile">
                        <img src={expProfil} alt="user" />
                    </div>
                </div>
                <hr />
                <div className="updateMusicPage-core-content">
                    <div className="updateMusicCover-field">
                        <img
                            src={`https://illumino-api.kakashispiritnews.my.id${music?.cover_image}`}
                            alt="Add Cover"
                        />
                        <p>Add Image</p>
                        <input
                            type="file"
                            accept="image/*"
                            name={'cover_image'}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="updateMusic-forms-content">
                        <input type="text" placeholder='Add Music Name' value={music?.title} name={'title'}
                               onChange={handleChange}/>
                        <input type="text" placeholder='Add Duration' value={music?.duration} name={'duration'} onChange={handleChange}/>
                        <div className="uploadMusic-field">
                            <label>
                                <img src={UploadIcon} alt="Upload Music"/>
                            </label>
                            <input
                                type="file"
                                id='uploadMusic-field'
                                placeholder='Upload Music'
                                accept="audio/*"
                                name={'music_uri'}
                                onChange={handleChange}
                            />
                        </div>  
                        <input type="text" placeholder='Artist' name={'artist'} value={music?.artist} onChange={handleChange}/>
                        <div className="confirm-button">
                            <button type='button' onClick={handleSave}>Update</button>
                        </div>
                    </div>
                </div>
                <div className="updateMusicPage-footer">
                    <SecondFooter/>
                </div>
            </div>
        </div>
        </>
    );
}

export default AddMusicPage;