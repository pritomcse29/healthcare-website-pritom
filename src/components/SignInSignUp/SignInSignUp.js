import React from "react";
import './SignInSignUp.css';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../../Firebase/firebase.init";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const SignInSignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    const [name, setName] = useState('');
    const auth = getAuth();
    const handleGoogleSignIn = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const loggedInUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL
                };
                setUser(loggedInUser);

            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const handleGithubSignIn = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                const { displayName, photoURL, email } = result.user;
                const loggedInUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL
                };
                setUser(loggedInUser);
            })
    }
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('password must be 6 character');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('password must contain 2 upper case');
            return;
        }

        if (isLogin) {
            isLogin ? processLogin(email, password) : registerNewUser(email, password);
        }
        else {
            registerNewUser(email, password);
        }

    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }


    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }


    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => { })
    }
    return (
        <div >
            <form onSubmit={handleRegistration}>
                <h3 className="text-primary text-center">{isLogin ? 'Login' : 'Register'}</h3>

                {/* {!isLogin && <div className="row mb-3 container">
                    <label htmlFor="inputName" className="form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                    </div>
                </div>
                } */}
                {!isLogin && <div className="mx-5 row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input
                            onBlur={handleNameChange} type="email" className="form-control" id="inputName" placeholder="Your Name" required />
                    </div>
                </div>}
                <div className=" mx-5 row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input
                            onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder="Your Email" required />
                    </div>
                </div>
                <div className="mx-5 row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" placeholder="Your password" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already Registered?
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <button style={{ margin: "5px" }} type="submit" className="btn btn-primary">{isLogin ? 'login' : 'Register'}</button>

                <button type="button" onClick={handleResetPassword} className="btn btn-secondary btn-sm">Reset Password</button>
            </form>

            <h4>Or</h4>
            {/* <Link to="/login">want to Sign In with Your Google Account?</Link> */}
            <div className="f-style">

                <Login></Login>
                <Footer></Footer>

            </div>
        </div>


    );
};

export default SignInSignUp;