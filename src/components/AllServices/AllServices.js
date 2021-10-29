import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

import "./AllServices.css";
const AllServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json()
            )
            .then(data => setServices(data));
    }, [])
    return (
        <div>

            <div className="Service-container">
                {
                    services.map(service => (

                        <div className="ServiceStyle">
                            <img className="img-size" src={service?.img} />
                            <h4>Name:{service?.name}</h4>
                            <h5>Description:{service?.description}</h5>

                            <Link to={`/singleservice/${service?.id}`}>
                                <button>
                                    Details
                                </button>
                            </Link>

                        </div>

                    ))
                }
            </div>
            <Footer></Footer>
        </div>
    );
};
export default AllServices;