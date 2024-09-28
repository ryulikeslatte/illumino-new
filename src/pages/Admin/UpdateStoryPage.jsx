import AdminSideNav from '../../components/adminSideNav'
import SecondFooter from '../../components/SecondFooter'
import chevronIcon from '../../assets/image/chevron.svg'
import expProfil from '../../assets/image/exp-profil.png'
import PlusIcon from '../../assets/image/plus.png'
import UploadIcon from '../../assets/image/upload.png'
import '../../assets/style/updateStory.css'
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";

function UpdateStoryPage(){
    const {id} = useParams()
    const [story, setStory] = useState(null);

    const getStory = async () => {
        await fetch(`https://illumino-api.kakashispiritnews.my.id/api/cms/story?id=${id}`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('access')}`
            }
        }).then(async (v) => {
            if (v.status === 200 || v.status === 201) {
                const response = await v.json();
                setStory(response.data)
            }
        });
    }

    const handleChange = (e) => {
        setStory({
            ...story,
            [`${e.target.name}`]: e.target.name === 'audio' || e.target.name === 'image' ? e.target.files[0] : e.target.value
        })
    }

    const handleSave = async () => {
        const formData = new FormData();
        formData.append('title', story?.title);
        formData.append('author', story?.author);
        formData.append('content', story?.content);
        formData.append('image', story?.image);
        formData.append('audio', story?.audio);

        await fetch(`https://illumino-api.kakashispiritnews.my.id/api/cms/story?id=${id}`, {
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
        getStory()
    }, []);

    return(
        <>
        <div className="updateStoryPage-container">
            <div className="updateStoryPage-side-nav">
                <AdminSideNav/>
            </div>
            <div className="updateStoryPage-content">
                <div className="dashboard-updateStory-top">
                    <div className="back-button-dashboard">
                        <img src={chevronIcon} alt="back" />
                        <p>Update Story</p>
                    </div>
                    <div className="user-profile">
                        <img src={expProfil} alt="user" />
                    </div>
                </div>
                <hr />
                <div className="updateStoryPage-core-content">
                    <div className="updateStoryCover-field">
                        <img src={`https://illumino-api.kakashispiritnews.my.id${story?.image}`} alt="Add Cover"/>
                        <p>Add Image</p>
                        <input
                            type="file"
                            accept="image/*"
                            name={'image'}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="updateStory-forms-content">
                        <input type="text" placeholder='Add Story Name' name={'title'} value={story?.title}
                               onChange={handleChange}/>
                        <input type="text" placeholder='Description Story' name={'content'} value={story?.content} onChange={handleChange}/>
                        <div className="uploadStory-field">
                            <label htmlFor="uploadStory-field">
                                <img src={UploadIcon} alt="Upload Music" />
                            </label>
                            <input type="file" id='uploadStory-field' placeholder='Upload Music' name={'audio'} onChange={handleChange}/>
                        </div>  
                        <input type="text" placeholder='Artist' name={'author'} value={story?.author} onChange={handleChange}/>
                        <div className="confirm-button">
                            <button type='button' style={{ cursor: 'pointer' }} onClick={handleSave}>Update</button>
                        </div>
                    </div>
                </div>
                <div className="updateStoryPage-footer">
                    <SecondFooter/>
                </div>
            </div>
        </div>
        </>
    );
}

export default UpdateStoryPage;