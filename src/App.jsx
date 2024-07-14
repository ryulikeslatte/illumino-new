import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPages from "./pages/LandingPage"
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import RegisterPage2 from './pages/RegisterPage-2'
import HomePages from './pages/HomePages'
import SearchPages from './pages/SearchPages'
import JournalPages from './pages/JournalPages'


function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<LandingPages/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/register/p' element={<RegisterPage2/>}/>
        <Route path='/homes' element={<HomePages/>}/>
        <Route path='/search' element={<SearchPages/>}/>
        <Route path='/journal' element={<JournalPages/>}/>
      </Routes>
    </Router>
  );
}

export default App
