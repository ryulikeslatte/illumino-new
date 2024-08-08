import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPages from "./pages/LandingPage"
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import RegisterPage2 from './pages/RegisterPage-2'
import HomePages from './pages/HomePages'
import SearchPages from './pages/SearchPages'
import JournalPages from './pages/JournalPages'
import StoryPage from './pages/storyPage'
import CalendarPage from './pages/calendarPage'
import WelcomeAdmin from './pages/Admin/WelcomeAdminPages'
import AdminDashboard from './pages/Admin/DashboardAdminPages'
import MusicDashboard from './pages/Admin/DashboardMusicPages'
import AddMusic from './pages/Admin/AddMusicPage'
import StoryDashboard from './pages/Admin/DashboardStoryPages'
import AddStory from './pages/Admin/AddStoryPage'
import UsersDashboard from './pages/Admin/DashboardUsersPages'
import MusicPage from './pages/MusicPage'
import DetailPlayMusic from './pages/DetailPlayMusic'
import DetailStory from './pages/DetailStory'
import LoginPageAdmin from './pages/Admin/LoginPage2';

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<LandingPages/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/admin/login/' element={<LoginPageAdmin/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/register/p' element={<RegisterPage2/>}/>
        <Route path='/homes' element={<HomePages/>}/>
        <Route path='/search' element={<SearchPages/>}/>
        <Route path='/journal' element={<JournalPages/>}/>
        <Route path='/music' element={<MusicPage/>}/>
        <Route path='/calendar' element={<CalendarPage/>}/>
        <Route path='/playmusic' element={<DetailPlayMusic/>}/>
        <Route path='/detailstory' element={<DetailStory/>}/>
        <Route path='/story' element={<StoryPage/>}/>
        <Route path='/admin' element={<WelcomeAdmin/>}/>
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
        <Route path='/admin/music' element={<MusicDashboard/>}/>
        <Route path='/admin/music/add' element={<AddMusic/>}/>
        <Route path='/admin/story' element={<StoryDashboard/>}/>
        <Route path='/admin/story/add' element={<AddStory/>}/>
        <Route path='/admin/users' element={<UsersDashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App
