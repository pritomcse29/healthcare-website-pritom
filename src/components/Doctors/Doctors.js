import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

import "./Doctors.css";
const Doctors = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fakedoctor.JSON')
            .then(res => res.json()
            )
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h2 className="text-center">Doctors List</h2>
            <div className="Service-container">

                {
                    services.map(service => (

                        <div className="ServiceStyle">
                            <img className="img-size" src={service?.img} />
                            <h4>Name:{service?.name}</h4>
                            <h5>Description:{service?.description}</h5>



                        </div>

                    ))
                }
            </div>
            <Footer></Footer>
        </div>
    );
};
export default Doctors;