import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


const SingleService = () => {
    const { signleServiceId } = useParams();
    const [serviceDetail, setServiceDetail] = useState([]);

    const [singleService, setSingleService] = useState({});
    useEffect(() => {
        fetch('/fake2.JSON')
            .then(res => res.json())
            .then(data => setServiceDetail(data.service));
    }, [])
    useEffect(() => {
        const foundService = serviceDetail.find(service => service.identity.id === signleServiceId)
        setSingleService(foundService);
    }, [serviceDetail])

    return (
        <div>
            <h1>Welcome to  Sarkar Health Care</h1>
            <h2>Name:{singleService?.name}</h2>
            <h2>Address:{singleService?.location?.street},{singleService?.location?.city}</h2>
            "
            <img style={{
                height: "200px",
                width: "310px"
            }} src={singleService?.picture?.thumbnail} alt="" />

            <p>Description:{singleService?.description}</p>
        </div>
    );
};

export default SingleService;