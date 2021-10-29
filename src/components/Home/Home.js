import React from "react";

import useAuth from "../../hooks/useAuth";
import Doctors from "../Doctors/Doctors";

import Footer from "../Footer/Footer";
import Services from "../Services/Services";

const Home = () => {
    const { user } = useAuth();
    return (
        <div className="bg-color">

            <img src="https://wallpaperaccess.com/full/136934.jpg" alt="" />
            <h2 className="text-center">Our Services</h2>
            <Services></Services>


            <Doctors></Doctors>

        </div>

    );
};

export default Home;