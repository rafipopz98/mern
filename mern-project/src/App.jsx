import {BrowserRouter  as Router,Routes,Route,Link} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import Login from './components/Login';
import './App.css'

function App() {
  return <>
<Router>
  <Navbar />
  <Routes>
    <Route exact path={'/'} element={<Home/>}/>
    <Route exact path={'/contact'} element={<Contact/>}/>
    <Route exact path={'/about'} element={<About/>}/>
    <Route exact path={'/login'} element={<Login/>}/>
    <Route exact path={'/signup'} element={<SignUp/>}/>
    <Route exact path={'*'} element={<Home/>}/>

  </Routes>
</Router>
  </>;
}

export default App;
