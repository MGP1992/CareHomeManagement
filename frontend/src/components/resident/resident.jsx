import React, { useState } from "react";
import AddNotes from "../addNotes/AddNotes";
import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardGroup,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

const Resident = ({ resident }) => {
  const navigate = useNavigate();
  const goToProfile = () => {
    navigate(`/residents/profile/${resident.residentID}`);
  };
  const [checkArr, setCheckArr] = useState(false);

  const latestActivity = () => {
    if (resident.notes.activities.length > 0) {
      const dateTime = resident.notes.activities[0].time;
      return `${resident.notes.activities[0].time} ${resident.notes.activities[0].note}`;
    } else {
      return "No notes added.";
    }
  };
  const latestMedication = () => {
    if (resident.notes.medication.length > 0) {
      return resident.notes.medication[0].note;
    } else {
      return "No notes added.";
    }
  };
  const latestWellbeing = () => {
    if (resident.notes.wellbeing.length > 0) {
      return resident.notes.wellbeing[0].note;
    } else {
      return "No notes added.";
    }
  };
  const latestOthers = () => {
    if (resident.notes.other.length > 0) {
      return resident.notes.other[0].note;
    } else {
      return "No notes added.";
    }
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
            <h5 className="text-left">Most Recent Notes</h5>
            <br />
            <CardText
              className="text-secondary mb-4"
              style={{ fontSize: "16px" }}
            >
              <div className="activity-notes">
                <h5 style={{ color: "black", fontStyle: "italic", fontSize: "18px" }}>Activities:</h5>
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
              <div className="medication-notes">
                <h5 style={{ color: "black", fontStyle: "italic", fontSize: "18px" }}>Medication:</h5>
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
              <div className="wellbeing-notes">
                <h5 style={{ color: "black", fontStyle: "italic", fontSize: "18px" }}>Well-being:</h5>
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
              <div className="other-notes">
                <h5 style={{ color: "black", fontStyle: "italic", fontSize: "18px" }}>Other:</h5>
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
