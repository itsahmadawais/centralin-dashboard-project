
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faFacebookf } from '@fortawesome/free-solid-svg-icons'
import { Dropdown } from 'bootstrap';
import MenuItem from './MenuItem';
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
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            <div className="d-flex justify-content-between">
                                <div className="left-menu">
                                    <span className="pre-icon">
                                        <i className="fa-solid fa-file-lines"></i>
                                    </span>
                                    Downloads
                                </div>
                                <div className="right-menu">
                                    <span className="post-icon">
                                    <i className="fa-solid fa-chevron-right"></i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            <div className="d-flex justify-content-between">
                                <div className="left-menu">
                                    <span className="pre-icon">
                                        <i class="fa-solid fa-users"></i>
                                    </span>
                                    Shared Links
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            <div className="d-flex justify-content-between">
                                <div className="left-menu">
                                    <span className="pre-icon">
                                        <i class="fa-solid fa-user"></i>
                                    </span>
                                    Personal Links
                                </div>
                            </div>
                        </a>
                    </li>
                    <Dropdown title="Admin Groups" icon="fa-solid fa-chart-column"/>
                    <MenuItem title="Smart Alerts" icon="fa-solid fa-bell" badge="10" badge-type="badge bg-danger badge-round" alertCount="10"/>
                    <Dropdown title="Trading Diary" icon="fa-solid fa-chart-column"/>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            <div className="d-flex justify-content-between">
                                <div className="left-menu">
                                    <span className="pre-icon">
                                        <i class="fa-solid fa-bell"></i>
                                    </span>
                                    Smart Alerts
                                </div>
                                <div className="right-menu">
                                    <span className="badge bg-danger badge-round">
                                        10
                                    </span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            <div className="d-flex justify-content-between">
                                <div className="left-menu">
                                    <span className="pre-icon">
                                        <i class="fa-solid fa-chart-column"></i>
                                    </span>
                                    Trading Diary
                                </div>
                                <div className="right-menu">
                                    <span className="post-icon">
                                    <i className="fa-solid fa-chevron-right"></i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            <div className="d-flex justify-content-between">
                                <div className="left-menu">
                                    <span className="pre-icon">
                                        <i class="fa-solid fa-arrow-down-short-wide"></i>
                                    </span>
                                    Co-Development
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <hr/>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            <div className="d-flex justify-content-between">
                                <div className="left-menu">
                                    <span className="pre-icon">
                                        <i class="fa-solid fa-phone"></i>
                                    </span>
                                    Support
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            <div className="d-flex justify-content-between">
                                <div className="left-menu">
                                    <span className="pre-icon">
                                        <i class="fa-solid fa-comment"></i>
                                    </span>
                                    Feedback
                                </div>
                            </div>
                        </a>
                    </li>
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
  