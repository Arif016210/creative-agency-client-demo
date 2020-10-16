import React, { useContext } from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logos/logo.png';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            // console.log(result);
            // storeAuthToken();
            history.replace(from);

        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });

    }

    // const storeAuthToken = () => {
    //     firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
    //         .then(function (idToken) {
    //             console.log(idToken);
    //             sessionStorage.setItem('token', idToken)
    //         }).catch(function (error) {
    //             // Handle error
    //         });
    // }

    return (
        <div className="container" >
            <div className="row" >
                <div className="col-md-3" >

                </div>

                <div className="col-md-6">
                    <img className="google-logo" src={logo} alt="" />
                    <div className="google-section" >
                        <h4 className="text-center" >Login With</h4>
                        <button className="google-btn" onClick={handleGoogleSignIn} > <FontAwesomeIcon icon={faUserCircle} /> Continue with Google</button>
                        <p className="text-center" >Don't have an account?<a href="#">Create an account</a></p>
                    </div>

                </div>


                <div className="col-md-3" >

                </div>
            </div>

        </div >
    );
};

export default Login; 