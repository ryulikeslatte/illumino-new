import SecondFooter from "../components/SecondFooter";
import chevronIcon from '../assets/image/chevron.svg';
import expProfil from '../assets/image/exp-profil.png';
import SideNav from '../components/sideNav'
import '../assets/style/calendarPage.css';
import { useState } from 'react';
import Calendar from 'react-calendar';
import Running from '../assets/image/running.png'
import Meditation from '../assets/image/meditation.png'
import Listening from '../assets/image/listeningtomusic.png'
import Writing from '../assets/image/writing.png'
import RecentAct from '../components/recentActivity'

function CalendarPage() {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    }
    return (
        <>
        <div className="container">
            <div className="sidebar">
                <SideNav />
            </div>
            <div className="main">
                <div className="calendarPage-core-top-content">
                    <div className="back-button-journalPages">
                        <img src={chevronIcon} alt="back" />
                        <p>Calendar</p>
                    </div>
                    <div className="user-profile">
                        <img src={expProfil} alt="user" />
                    </div>
                </div>
                <hr />
                <div className="main-content-calendar">
                    <div className="cal-section">
                        <div className="calendar">
                            <Calendar onChange={onChange} value={date} />
                        </div>
                    </div>
                    <div className="task-list">
                        <p className="header">Task List</p>
                        <div className="task-list-content">
                            <div className="task-1">
                                <input type="checkbox" checked="checked"/>
                                <p>Running</p>
                                <img src={Running}/>
                            </div>
                            <div className="task-2">
                                <input type="checkbox" checked="checked"/>
                                <p>Meditation</p>
                                <img src={Meditation}/>
                            </div>
                            <div className="task-3">
                                <input type="checkbox" checked="checked"/>
                                <p>Listening to Music</p>
                                <img src={Listening}/>
                            </div>
                            <div className="task-4">
                                <input type="checkbox" checked="checked"/>
                                <p>Writing Journal</p>
                                <img src={Writing}/>
                            </div>
                        </div>
                        <p className="save">Save</p>
                    </div>

                    <div className="recent-activity">
                        <p className="header">Recent Activity</p>
                        <RecentAct/>
                        <RecentAct/>
                        <RecentAct/>
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

export default CalendarPage;