import React, { useContext } from 'react';
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './Login.css';
import { userContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';

initializeApp(firebaseConfig);

const Login = () => {

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                const loggedInfo = { email: user.email, name: user.displayName, photo: user.photoURL }
                setLoggedInUser({ ...loggedInfo })
                sessionStorage.setItem('googleToken', token);
                history.replace(from);

            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
            <div className="login-container">
                <h3 style={{ borderBottom: '1px solid lightgrey' }} className="text-center mb-5 pb-2">Login Area</h3>
                <div>
                    <button style={{ border: '1px solid lightgrey' }} onClick={handleGoogleSignIn} className="btn btn-lg btn-light google-btn mt-3">
                        <img style={{ width: '20px' }} className="img-fluid me-3 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="" />
                        Google Sign In
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Login;