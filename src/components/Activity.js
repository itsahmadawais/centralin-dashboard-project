import Acticity from '../components/Activity';
function Activity() {
    return (
        <div className="col-md-12 mt-5">
            <h2>Account Activity</h2>
            <table id="activity-table" className="table">
                <thead>
                    <tr>
                        <th scope="col">DATE</th>
                        <th scope="col">TIME</th>
                        <th scope="col">IP ADDRESS</th>
                        <th scope="col">CHANGE MADE</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22-02-2022</td>
                        <td>
                            <span className="time text-primary">
                                10:00 PM
                            </span>
                        </td>
                        <td>192.168.20.22</td>
                        <td>
                            <span className="text-success">
                                Success at first attempt
                            </span>
                        </td>
                        <td>
                            <a href="#" className="nav-link">Login</a>
                        </td>
                    </tr>
                    <tr>
                        <td>22-02-2022</td>
                        <td>
                            <span className="time text-primary">
                                10:00 PM
                            </span>
                        </td>
                        <td>192.168.20.22</td>
                        <td>
                            <span className="text-danger">
                                Disconnection
                            </span>
                        </td>
                        <td>
                            <a href="#" className="nav-link">Login</a>
                        </td>
                    </tr>
                    <tr>
                        <td>22-02-2022</td>
                        <td>
                            <span className="time text-primary">
                                10:00 PM
                            </span>
                        </td>
                        <td>192.168.20.22</td>
                        <td>
                            <span className="text-success">
                                Success at first attempt
                            </span>
                        </td>
                        <td>
                            <a href="#" className="nav-link">Login</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
  }
  
  export default Activity;
  