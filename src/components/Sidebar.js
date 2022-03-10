
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faFacebookf } from '@fortawesome/free-solid-svg-icons';
import Dropdown from './Dropdown';
import MenuItem from './MenuItem';
import DropdownItem from './DorpdownItem';
function Sidebar() {
    return (
        <div id="sidebar">
            <div id="user-meta">
                <div className="icon mb-2">
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <h2 className="username">Admin One</h2>
                <p className="text">Centralin User</p>
            </div>
            <div id="nav-items">
                <ul className="nav flex-column">
                    <Dropdown title="Downloads" icon="fa-solid fa-file-lines">
                        <DropdownItem title="Weekly Reports"/>
                    </Dropdown>
                    <Dropdown title="Admin Groups" icon="fa-solid fa-chart-column"/>
                    <MenuItem title="Smart Alerts" icon="fa-solid fa-bell" badge="10" badge-type="badge bg-danger badge-round" alertCount="10"/>
                    <Dropdown title="Trading Diary" icon="fa-solid fa-chart-column"/>
                    <MenuItem title="Shared Links" icon="fa-solid fa-users"/>
                    <MenuItem title="Personal Links" icon="fa-solid fa-user"/>
                    <MenuItem title="Co-Development" icon="fa-solid fa-arrow-down-short-wide"/>
                    <li className="nav-item">
                        <hr/>
                    </li>
                    <MenuItem title="Support" icon="fa-solid fa-phone"/>
                    <MenuItem title="Feedback" icon="fa-solid fa-comment"/>
                </ul>
            </div>
            <div id="sidebar-bottom" className="text-center">
                <ul className="social-icons mb-2">
                    <li>
                        <a href="#">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa-brands fa-telegram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </li>
                </ul>
                <div className="d-grid gap-2 ms-3 me-3">
                    <a href="#" className="btn btn-success mt-2">Log out <i className="icon fa-solid fa-arrow-right-from-bracket"></i></a> 
                </div>
                
            </div>
        </div>
    );
  }
  
  export default Sidebar;
  