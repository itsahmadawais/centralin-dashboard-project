function MenuItem(props) {
    return (
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
                <div className="d-flex justify-content-between">
                    <div className="left-menu">
                        <span className="pre-icon">
                            <i className={props.icon}></i>
                        </span>
                        {props.title}
                    </div>
                    {props.badge ? (
                        <div className="right-menu">
                            <span className="badge bg-danger badge-round">
                                {props.alertCount}
                            </span>
                        </div>
                    ): (
                        <></>
                    )
                    }
                </div>
            </a>
        </li>
    );
  }
  
  export default MenuItem;
  