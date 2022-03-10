import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Security from './Pages/Security';

function App() {
  return (
    <div className="wrapper d-flex">
      <Sidebar/>
      <div id="content" className="content">
        <Topbar/>
        <div id="page-content">
          <Security/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
