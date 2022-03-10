import React, { useState } from 'react';
import Acticity from '../components/Activity';
function Security() {
    const [email, setEmail] = useState("randomemail@gmail.com");
    const emailChanger = e => {
        setEmail(e.value)
    }
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-12">
                    <h1>Profile</h1>
                </div>
                <div className="col-md-12">
                    <ul id="profile_Navigation" className="nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Personal Information</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Sign In &amp; Security</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Connect and View Social Media Information</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Personalization</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Centralin Points</a>
                        </li>
                    </ul>
                    <div className="card mt-2">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4">
                                    <h2 className="heading">Sign In</h2>
                                </div>
                                <div className="col-md-8">
                                    <div className="mb-3 custom-form-control">
                                        <label className="form-label">Email Address</label>
                                        <input type="email" className="form-control" placeholder="dummy@email.com" defaultValue={email} onChange={emailChanger}/>
                                    </div>
                                    <div className="mb-3 custom-form-control">
                                        <label className="form-label">Confirm Email Address</label>
                                        <input type="email" className="form-control" placeholder="dummy@email.com" defaultValue={email} onChange={emailChanger}/>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                    <div className="card mt-2">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4">
                                    <h2 className="heading">Security Information</h2>
                                </div>
                                <div className="col-md-8">
                                    <div className="mb-3 custom-form-control">
                                        <label className="form-label">Old Password</label>
                                        <input type="password" className="form-control" placeholder="dummy@email.com" defaultValue={email} onChange={emailChanger}/>
                                    </div>
                                    <div className="mb-3 custom-form-control">
                                        <label className="form-label">New Password</label>
                                        <input type="password" className="form-control" placeholder="dummy@email.com" defaultValue={email} onChange={emailChanger}/>
                                    </div>
                                    <div className="mb-3 custom-form-control">
                                        <label className="form-label">Confirm New Password</label>
                                        <input type="password" className="form-control" placeholder="dummy@email.com" defaultValue={email} onChange={emailChanger}/>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
                <Acticity/>
            </div>
        </div>
    );
  }
  
  export default Security;
  