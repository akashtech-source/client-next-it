import React, { useContext } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                console.log(signedInUser);
                history.replace(from);
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }



    return (
        <div className="login-container text-center ">
            <div className="loginForm-container">
                <h1>Login to Continue</h1>
                <input className="form-control w-25 " type="text" placeholder="Enter your email" />
                <br />
                <input className="form-control w-25" type="password" name="" placeholder="Enter your password" />
                <br />
                <button className="btn btn-primary">Log In</button>
                <br />
                <br />
                <button onClick={handleGoogleSignIn} className="btn btn-success">Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;