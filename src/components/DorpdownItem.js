function DropdownItem(props) {
    return (
        <li className="nav-item">
            <a className="nav-link" href="#">
                {props.title}
            </a>
        </li>
    );
  }
  
  export default DropdownItem;
  