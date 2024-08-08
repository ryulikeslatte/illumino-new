import AdminSideNav from '../../components/adminSideNav'
import SecondFooter from '../../components/SecondFooter'
import chevronIcon from '../../assets/image/chevron.svg'
import expProfil from '../../assets/image/exp-profil.png'
import PlusIcon from '../../assets/image/plus.png'
import UploadIcon from '../../assets/image/upload.png'
import '../../assets/style/updateMusic.css'

function AddMusicPage(){
    return(
        <>
        <div className="updateMusicPage-container">
            <div className="updateMusicPage-side-nav">
                <AdminSideNav/>
            </div>
            <div className="updateMusicPage-content">
                <div className="dashboard-updateMusic-top">
                    <div className="back-button-dashboard">
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
                        <img src={PlusIcon} alt="Add Cover" />
                        <p>Add Image</p>
                    </div>
                    <div className="updateMusic-forms-content">
                        <input type="text" placeholder='Add Music Name'/>
                        <input type="text" placeholder='Add Duration'/>
                        <div className="uploadMusic-field">
                            <label>
                                <img src={UploadIcon} alt="Upload Music" />
                            </label>
                            <input type="file" id='uploadMusic-field' placeholder='Upload Music'/>
                        </div>  
                        <input type="text" placeholder='Artist'/>
                        <div className="confirm-button">
                            <button type='submit'>Save</button>
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