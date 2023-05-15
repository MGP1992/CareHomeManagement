import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import AddNotes from "../addNotes/AddNotes";

const ResidentProfile = () => {
  const { residentID } = useParams();
  const [residents, setResidents] = useState([]);
  const [notes, setNotes] = useState("");
  const navigate = useNavigate()
  const [isBusy, setBusy] = useState(true)
  const token = window.localStorage.getItem("token");

  const tokenCheck = {
    headers: { Authorization: `Bearer ${token}` },
  };
  useEffect(() => {
    if (token) {
      axios.get(`http://localhost:8082/residents/${residentID}`, tokenCheck).then((res) => {
        console.log(res.data.notes)
        setResidents(res.data);
        setNotes(res.data.notes);
        setBusy(false)
      });
    } else {
      navigate("/")
    } 
  }, []);

console.log(notes)
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
                <AddNotes residentID={residents.residentID} />
                <br />
                <div className="activity-notes">
                  <h5>Activities:</h5>
                  {notes && notes.activities.map((item) => {
                    return (
                    <>
                    <p>{`${item.time} - ${item.by}: ${item.note}`}</p>
                    </>
                    );
                  })}
                </div>
                <br />
                <div className="medication-notes">
                  <h5>Medications:</h5>
                  {notes && notes.medication.map((item) => {
                    return (
                    <>
                    <p>{`${item.time} - ${item.by}: ${item.note}`}</p>
                    </>
                    );
                  })}
                </div>
                <br />
                <div className="wellbeing-notes">
                  <h5>Well-being:</h5>
                  {notes && notes.wellbeing.map((item) => {
                    return (
                    <>
                    <p>{`${item.time} - ${item.by}: ${item.note}`}</p>
                    </>
                    );
                  })}
                </div>
                <br />
                <div className="other-notes">
                  <h5>Other:</h5>
                  {notes && notes.other.map((item) => {
                    return (
                    <>
                    <p>{`${item.time} - ${item.by}: ${item.note}`}</p>
                    </>
                    );
                  })}
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
