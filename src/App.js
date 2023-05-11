import './App.css';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Education from './pages/education';
import Work from './pages/work';
import SideProjects from './pages/side_projects';
import Music from './pages/music';
import Resume from './pages/resume';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/education' element={<Education/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/sideprojects' element={<SideProjects/>} />
        <Route path='/music' element={<Music/>} />
        <Route path='/resume' element={<Resume/>} />
      </Routes>
    </Router>
  );
}

export default App;
