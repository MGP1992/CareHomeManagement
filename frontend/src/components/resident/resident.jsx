import React from "react";
import AddNotes from "../addNotes/AddNotes";
import { Button, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, CardGroup } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Resident = ({resident}) => {
    const navigate = useNavigate()
    const RESIDENTPIC = "URL";

    const goToProfile = () => {
        navigate(`/residents/profile/${resident.residentID}`)
    }

    return (
        <Card>
           <CardImg top width="100%" src={RESIDENTPIC} alt="ResidentPic" />
           <CardBody>
            <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">
                <p style={{fontSize: "36px"}}>{resident.firstName} {resident.lastName}</p>
                </CardTitle>
                    <CardSubtitle
                    className="text-secondary mb-3 font-weight-light text-uppercase"
                    style={{ fontSize: "0.8rem" }}
                    >
                    <p style={{fontSize: "24px"}}>Resident ID: {resident.residentID}</p>
                    </CardSubtitle>
                <br />
                    <CardText
                    className="text-secondary mb-4"
                    style={{ fontSize: "0.75rem" }}
                    > 
                    <AddNotes residentID={resident.residentID}/>  
                    <div className="activity-notes"><h5>Activities:</h5>{resident.notes.activities}</div><br/>
                    <div className="medication-notes"><h5>Medications:</h5>{resident.notes.medication}</div><br/>
                    <div className="wellbeing-notes"><h5>Well-being</h5>{resident.notes.wellbeing}</div><br/>
                    <div className="other-notes"><h5>Other</h5>{resident.notes.others}</div><br/>  
                    </CardText>
                <Button color="success" className="font-weight-bold" onClick={goToProfile}>
                View Profile
                </Button>
            </CardBody>
        </Card>
    );
};

export default Resident;
