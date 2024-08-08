import AdminSideNav from '../../components/adminSideNav'
import SecondFooter from '../../components/SecondFooter'
import chevronIcon from '../../assets/image/chevron.svg'
import expProfil from '../../assets/image/exp-profil.png'
import PlusIcon from '../../assets/image/plus.png'
import UploadIcon from '../../assets/image/upload.png'
import '../../assets/style/addStory.css'

function AddStoryPage(){
    return(
        <>
        <div className="addStoryPage-container">
            <div className="addStoryPage-side-nav">
                <AdminSideNav/>
            </div>
            <div className="addStoryPage-content">
                <div className="dashboard-addStory-top">
                    <div className="back-button-dashboard">
                        <img src={chevronIcon} alt="back" />
                        <p>Create Story</p>
                    </div>
                    <div className="user-profile">
                        <img src={expProfil} alt="user" />
                    </div>
                </div>
                <hr />
                <div className="addStoryPage-core-content">
                    <div className="addStoryCover-field">
                        <img src={PlusIcon} alt="Add Cover" />
                        <p>Add Image</p>
                    </div>
                    <div className="addStory-forms-content">
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
                <div className="addStoryPage-footer">
                    <SecondFooter/>
                </div>
            </div>
        </div>
        </>
    );
}

export default AddStoryPage;