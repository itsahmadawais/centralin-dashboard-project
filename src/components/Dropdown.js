import React, { useState } from 'react';
function Dropdown(props) {
    const [show, setDropdown] = useState(false);
    const buttonClickHandler = e => {
        setDropdown(!show)
    }
    return (
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#" onClick={buttonClickHandler}>
                <div className="d-flex justify-content-between">
                    <div className="left-menu">
                        <span className="pre-icon">
                            <i className={props.icon}></i>
                        </span>
                        {props.title}
                    </div>
                    <div className="right-menu">
                        <span className="post-icon">
                        <i className={show==true ? ("fa-solid fa-chevron-down") : ("fa-solid fa-chevron-right")}></i>
                        </span>
                    </div>
                </div>
            </a>
            {show==true ? (
                <ul className="sub-menu">
                    {props.children}
                </ul>
                ) :
                (
                    <></>
                )
            }
            
        </li>
    );
  }
  
  export default Dropdown;
  