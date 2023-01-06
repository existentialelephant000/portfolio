import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home'
import { Ozone } from './pages/Ozone'
import { AB } from './pages/AB'
import { Responsive } from './pages/Responsive'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Search } from './pages/Search';
import './App.css';


function App() {
  return (
    <>
    <div class="nav">
      <div class="navBar">
        <div>
          <Link style={{fontSize:'25px', fontWeight:'700'}} class="navB" to="/">hojoto</Link>
        </div>
        <div class="navButtons">
          <Link class="navB" to="/">home</Link>
          <Link class="navB" to="/About">about</Link>
          <Link class="navB" to="/Contact">contact</Link>
        </div>
      </div>
    </div>
    <Routes>
      {/* INTERNAL LINKS */}
      <Route path="/" element={ <Home/> }/>
      <Route path="/portfolio" element={ <Home/> }/>
      <Route path="/Ozone" element={ <Ozone/> }/>
      <Route path="/AB" element={ <AB/> }/>
      <Route path="/Responsive" element={ <Responsive/> }/>
      <Route path="/Contact" element={ <Contact/> }/>
      <Route path="/Search" element={ <Search/> }/>
      <Route path="/About" element={ <About/> }/>

      {/* EXTERNAL LINKS */}
    </Routes>
    </>
  );
}

export default App;
