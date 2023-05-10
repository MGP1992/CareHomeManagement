import React from "react";
import AddNotes from "../addNotes/AddNotes";

const Resident = ({resident}) => {


    console.log(resident.notes)

    return (
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-12 col-xl-4">
                    <div className="card" style={{"borderRadius": "15px"}}>
                        <div className="card-body text-center">
                            <div className="mt-3 mb-4">
                                <p style={{fontSize: "36px"}}>{resident.firstName} {resident.lastName}</p>
                                <p style={{fontSize: "24px"}}>{resident.residentID}</p>
                                <br />
                                <AddNotes residentID={resident.residentID} />
                                <div className="activity-notes"><h5>Activities:</h5>{resident.notes.activities}</div><br/>
                                <div className="medication-notes"><h5>Medications:</h5>{resident.notes.medication}</div><br/>
                                <div className="wellbeing-notes"><h5>Well-being</h5>{resident.notes.wellbeing}</div><br/>
                                <div className="other-notes"><h5>Other</h5>{resident.notes.others}</div><br/>
                            </div>      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resident;
