import SecondFooter from "../components/SecondFooter";
import chevronIcon from '../assets/image/chevron.svg';
import expProfil from '../assets/image/exp-profil.png';
import SideNav from '../components/sideNav'
import '../assets/style/journalPages.css';
import JournalCard from '../components/journalCard'

function JournalPages(){
    return(
        <>
        <div className="journalPages-container">
            <div className="journalPages-side-container">
                <SideNav/>
            </div>
            <div className="content">
                <div className="journalPages-core-top-content">
                    <div className="back-button-journalPages">
                        <img src={chevronIcon} alt="back" />
                        <p>Journal</p>
                    </div>
                    <div className="user-profile">
                        <img src={expProfil} alt="user" />
                    </div>
                </div>
                <hr />
                <div className="main-content">
                    <div className="journalPages-add-note-content">
                        <h2>Add a note</h2>
                        <div className="add-note-input-field-area">
                            <textarea name="note" id="noteField" placeholder="Describe how you are feeling today..."></textarea>
                            <button type="submit" id="confirmationButton"><u>Save</u></button>
                        </div>
                    </div>
                    <div className="journalPages-recent-activity-content">
                        <h2>Recent Journal</h2>
                        <div className="recent-activity-content-list">
                            <JournalCard/>
                            <JournalCard/>
                            <JournalCard/>
                        </div>
                    </div>
                </div>
                <div className="journalPages-footer-container">
                    <SecondFooter/>
                </div>
            </div> 
        </div>
        </>

    );
}

export default JournalPages;