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
  const [checkArr, setCheckArr] = useState(false)
  console.log(resident)
  console.log(resident.notes.activities)

const latestActivity = () => {
    if (resident.notes.activities.length > 1) {
        return resident.notes.activities[0]
    } else {
        return "No notes added."
    }
}
const latestMedication = () => {
    if (resident.notes.medication.length > 0) {
        return resident.notes.medication[0]
    } else {
        return "No notes added."
    }
}
const latestWellbeing = () => {
    if (resident.notes.wellbeing.length > 0) {
        return resident.notes.wellbeing[0]
    } else {
        return "No notes added."
    }
}
const latestOthers = () => {
    if (resident.notes.other.length > 0) {
        return resident.notes.other[0]
    } else {
        return "No notes added."
    }
}


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
                <h5>Activities:</h5>
                {latestActivity()}
              </div>
              <br />
              <div className="medication-notes">
                <h5>Medication:</h5>
                {latestMedication()}
              </div>
              <br />
              <div className="wellbeing-notes">
                <h5>Well-being:</h5>
                {latestWellbeing()}
              </div>
              <br />
              <div className="other-notes">
                <h5>Other:</h5>
                {latestOthers()}
              </div>
              <br />
            </CardText>
          </div>
        </div>
      </div>
    </div>

    // <Card>
    //   <CardBody>
    //     <CardTitle className="h2 mb-2 pt-2 text-center font-weight-bold text-secondary">
    //       <p style={{ fontSize: "32px" }}>
    //         {resident.firstName} {resident.lastName}
    //       </p>
    //     </CardTitle>

    //     <br />

    //       View Profile
    //     </Button>

    //   </CardBody>
    // </Card>
  );
};

export default Resident;
