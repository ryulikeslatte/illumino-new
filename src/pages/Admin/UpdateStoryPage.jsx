import AdminSideNav from '../../components/adminSideNav'
import SecondFooter from '../../components/SecondFooter'
import chevronIcon from '../../assets/image/chevron.svg'
import expProfil from '../../assets/image/exp-profil.png'
import PlusIcon from '../../assets/image/plus.png'
import UploadIcon from '../../assets/image/upload.png'
import '../../assets/style/updateStory.css'

function UpdateStoryPage(){
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
                        <img src={PlusIcon} alt="Add Cover" />
                        <p>Add Image</p>
                    </div>
                    <div className="updateStory-forms-content">
                        <input type="text" placeholder='Add Story Name'/>
                        <input type="text" placeholder='Description Story'/>
                        <div className="uploadStory-field">
                            <label htmlFor="uploadStory-field">
                                <img src={UploadIcon} alt="Upload Music" />
                            </label>
                            <input type="file" id='uploadStory-field' placeholder='Upload Music'/>
                        </div>  
                        <input type="text" placeholder='Artist'/>
                        <div className="confirm-button">
                            <button type='submit'>Save</button>
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