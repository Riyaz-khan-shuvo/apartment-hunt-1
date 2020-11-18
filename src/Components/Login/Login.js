import React, { useContext } from 'react';
import Header from '../Header/Header';
import './Login.css'
import facebook from '../../Images/facebook.png'
import google from '../../Images/google.png'
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebase.config'
import firebase from "firebase/app";

import "firebase/auth";
const Login = () => {
    const [loggedInUser, setLoggedInUser]  = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);  
    }
    const handleGoogleSignIn  = () => {

        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { isSignedIn: 'true', name: displayName, email: email } 
            setLoggedInUser(signedInUser);
            history.replace(from);
           
            console.log(signedInUser);
    
        }).catch(function (error) {
    
            const errorMessage = error.message;
    
            const email = error.email;
            console.log(errorMessage, email);
    
        });
    }
    return (
        <div>
            <Header></Header>
            <div className="container">

                <div className="login-area">
                    <h3 className="text-left mb-5">Login</h3>
                    <div className="input-area">
                        <input type="email" name="email" id="email" placeholder="User Name Or Email" /> <br />
                        <input type="password" name="pass" placeholder="password" id="" />
                        <div className="row">
                            <div className="col-md-6 text-left">
                                <input type="checkbox" name="remember" id="" /> <label>Remember Me</label>
                            </div>
                            <div className="col-md-6 text-right">
                                <a href="#">Forgot Password</a>
                            </div>
                        </div>
                        <button className="login-btn">Login</button>
                        <label >Don't have An account ?</label> <Link to="/createAccount"> <a href="#">Create an account</a></Link>
                    </div>
                </div>
                <div className="or-area mt-3">
                    <div className="row">
                        <div className="col-md-5">
                            <hr />
                        </div>
                        <div className="col-md-2">
                            <p>or</p>
                        </div>
                        <div className="col-md-5">
                            <hr />
                        </div>
                    </div>
                    <a href="#">
                        <div className="row social-login">
                            <div className="col-md-2">
                                <img src={facebook} alt="" />
                            </div>
                            <div className="col-md-10">
                                <h5>Continue with Facebook</h5>
                            </div>
                        </div>
                    </a>
                    <a href="#"  onClick={handleGoogleSignIn} >
                        <div className="row social-login">
                            <div className="col-md-2">
                                <img src={google} alt="" />
                            </div>
                            <div className="col-md-10">
                                <h5>Continue with Google</h5>
                            </div>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Login;