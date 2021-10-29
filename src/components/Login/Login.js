import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Footer from "../Footer/Footer";
import './Login.css';
const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);

            })
    }
    return (
        <div className="footer-style">
            {/* <h2>Please Login</h2> */}
            <button onClick={handleGoogleLogin}>Google Sign In</button>
            <br />
            {/* <Link to="/login-registration">New User want to register?</Link> */}

            {/* <div className="footer-style">
                <Footer></Footer>
            </div> */}
        </div>
    );
};

export default Login;