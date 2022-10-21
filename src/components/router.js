//import logo from './logo.svg';
import '../App.css';
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import Oracle from '../pages/oracle';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
//import {TextBtn,ContainedBtn,OutlinedBtn} from './components/button.js'
//import TemporaryDrawer from './components/navdrawer';
function Routerz() {
  return (
      <Router>
           <Routes>
                 <Route exact path='home' element={< Home />}></Route>
                 <Route exact path='about' element={< About />}></Route>
                 <Route exact path='contact' element={< Contact />}></Route>
                 <Route exact path='oracle' element={< Oracle />}></Route>
          </Routes>
       </Router>
    
  );
}

export default Routerz;
