import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import AddNotes from "../addNotes/AddNotes";

const ResidentProfile = () => {
    const {residentID} = useParams()
    const [resident, setResident] = useState([])

    useEffect(() => {
        console.log(residentID)
        axios
        .get(`http://localhost:8082/residents/${residentID}`)
        .then((res) => {
            console.log(res)
            setResident(res.data);
        });
    }, [])

    return (
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-12 col-xl-4">
                    <div class="card" style={{"border-radius": "15px"}}>
                        <div class="card-body text-center">
                            <div class="mt-3 mb-4">
                                <p style={{fontSize: "36px"}}>{resident.firstName} {resident.lastName}</p>
                                <p style={{fontSize: "24px"}}>{resident.residentID}</p>
                                <br />
                                <AddNotes residentID={resident.residentID} />
                                <p>Activity Log: theresa was raving tonight</p>
                                <p>Medication Log: 10g of ket</p>
                                <p>Wellbeing Log: not very well following the ket</p>
                                <p>Other: i quit my job</p>
                            </div>      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResidentProfile;
