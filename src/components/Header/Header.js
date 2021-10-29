import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import './Header.css'
const Header = () => {
    const { user, logout } = useAuth();
    return (

        <div className="header">
            <h2 style={{ color: "white", padding: "15px" }}>Sarkar Health Care</h2>
            <Link to="/home">Home</Link>
            <Link to="/login-registration">Login</Link>
            <Link to="/services">Services</Link>
            <Link to="/doctors">Doctors</Link>
            <Link to="/contact">Contacts</Link>
            <Link to="/about">About</Link>
            {/* <Link to="/register">Register</Link> */}
            {/* <Link to="/login-registration">Registration</Link> */}
            <span style={{ color: "white" }}>
                {user.displayName}

            </span>
            {user?.email && <button onClick={logout}>log out</button>}
        </div>
    );
};

export default Header;