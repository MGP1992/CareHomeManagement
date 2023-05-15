import React, { useState } from "react";
import AddNotes from "../addNotes/AddNotes";
import {
  Button,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

const Resident = ({ resident }) => {
  const navigate = useNavigate();
  const goToProfile = () => {
    navigate(`/residents/profile/${resident.residentID}`);
  };


  return (
    <div className="container">
      <div className="row">
        <div className="card border-1 shadow rounded-5 my-1">
          <div className="card-body p-4 p-sm-5">
            <CardTitle className="card-title text-center mb-5 fw-light fs-3">
              <p style={{ fontSize: "32px" }}>
                {resident.firstName} {resident.lastName}
              </p>
              <CardSubtitle className="text-secondary mb-3 text-center font-weight-light text-uppercase">
                <p style={{ fontSize: "22px" }}>{resident.residentID}</p>
              </CardSubtitle>
              <Button
                color="success"
                className="font-weight-bold"
                onClick={goToProfile}
              >
                View Profile
              </Button>
              <AddNotes residentID={resident.residentID} />
              <p />
            </CardTitle>
            <CardText
              className="text-secondary mb-4"
              style={{ fontSize: "16px" }}
            >                
            <h5 style={{ color: "black", fontStyle: "italic", fontSize: "16px" }}> Latest Activity</h5>
              <div className="notes-all">
                <h6 style={{ "fontSize": "14px" }}>
                  {resident.notes.activities.length > 0
                    ? resident.notes.activities[
                        resident.notes.activities.length - 1
                      ].by
                    : ""}
                </h6>
                <h6 style={{ "fontSize": "14px" }}>
                  {resident.notes.activities.length > 0
                    ? resident.notes.activities[
                        resident.notes.activities.length - 1
                      ].time
                    : ""}
                </h6>
                <h6 style={{ color: "#3b3a3a" }}>
                  {resident.notes.activities.length > 0
                    ? `'${resident.notes.activities[
                        resident.notes.activities.length - 1
                      ].note}'`
                    : "No notes added."}
                </h6>
              </div>
              <br />
              <h5 style={{ color: "black", fontStyle: "italic", fontSize: "16px" }}>Latest Medication</h5>
              <div className="notes-all">
                <h6 style={{ "fontSize": "14px" }}>
                  {resident.notes.medication.length > 0
                    ? resident.notes.medication[resident.notes.medication.length  - 1].by
                    : ""}
                </h6>
                <h6 style={{ "fontSize": "14px" }}>
                  {resident.notes.medication.length > 0
                    ? resident.notes.medication[resident.notes.medication.length  - 1].time
                    : ""}
                </h6>
                <h6 style={{ color: "#3b3a3a" }}>
                  {resident.notes.medication.length > 0
                    ? `'${resident.notes.medication[resident.notes.medication.length  - 1].note}'`
                    : "No notes added."}
                </h6>
              </div>
              <br />
              <h5 style={{ color: "black", fontStyle: "italic", fontSize: "16px" }}>Latest Wellbeing</h5>
              <div className="notes-all">
                <h6 style={{ "fontSize": "14px" }}>
                  {resident.notes.wellbeing.length > 0
                    ? resident.notes.wellbeing[resident.notes.wellbeing.length  - 1].by
                    : ""}
                </h6>
                <h6 style={{ "fontSize": "14px" }}>
                  {resident.notes.wellbeing.length > 0
                    ? resident.notes.wellbeing[resident.notes.wellbeing.length  - 1].time
                    : ""}
                </h6>
                <h6 style={{ color: "#3b3a3a" }}>
                  {resident.notes.wellbeing.length > 0
                    ? `'${resident.notes.wellbeing[resident.notes.wellbeing.length  - 1].note}'`
                    : "No notes added."}
                </h6>
              </div>
              <br />
              <h5 style={{ color: "black", fontStyle: "italic", fontSize: "16px" }}>Latest Other</h5>
              <div className="notes-all">
                <h6 style={{ "fontSize": "14px" }}>
                  {resident.notes.other.length > 0
                    ? resident.notes.other[resident.notes.other.length  - 1].by
                    : ""}
                </h6>
                <h6 style={{ "fontSize": "14px" }}>
                  {resident.notes.other.length > 0
                    ? resident.notes.other[resident.notes.other.length  - 1].time
                    : ""}
                </h6>
                <h6 style={{ color: "#3b3a3a" }}>
                  {resident.notes.other.length > 0
                    ? `'${resident.notes.other[resident.notes.other.length  - 1].note}'`
                    : "No notes added."}
                </h6>
              </div>
              <br />
            </CardText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resident;
