import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AddNotes from "../addNotes/AddNotes";

const ResidentProfile = () => {
  const { residentID } = useParams();
  const [residents, setResidents] = useState([]);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8082/residents/${residentID}`).then((res) => {
      console.log("the response:", res.data);
      setResidents(res.data);
      setNotes(res.data.notes);
    });
  }, []);

  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-12 col-xl-4">
          <div className="card" style={{ borderRadius: "15px" }}>
            <div className="card-body text-center">
              <div className="mt-3 mb-4">
                <p style={{ fontSize: "36px" }}>
                  {residents.firstName} {residents.lastName}
                </p>
                <p style={{ fontSize: "24px" }}>{residents.residentID}</p>
                <br />
                <AddNotes residentID={residents.residentID} />
                <div className="activity-notes">
                  <h5>Activities:</h5>
                  {notes.activities}
                </div>
                <br />
                <div className="medication-notes">
                  <h5>Medications:</h5>
                  {notes.medication}
                </div>
                <br />
                <div className="wellbeing-notes">
                  <h5>Well-being</h5>
                  {notes.wellbeing}
                </div>
                <br />
                <div className="other-notes">
                  <h5>Other</h5>
                  {notes.others}
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentProfile;
