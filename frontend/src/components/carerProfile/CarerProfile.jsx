import React, {useEffect, useState} from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios';
import Resident from '../resident/resident';
import { 
  Container, Row, Col, Button,
} from 'reactstrap';
import Header from '../sass-css/Header';


const CarerProfile = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const navigate = useNavigate();
  const [residents, setResidents] = useState([])

        useEffect(() => {
          axios
          .get(`http://localhost:8082/residents/`)
          .then((res) => {
              setResidents(res.data);
          });
      }, [])

        const newResident = () =>{
          navigate('/residents/add')
        }

  return (
    <>
    <Header/>
    <main className="my-5 py-5">
    <div  className='d-flex justify-content-center'>
    <Button type='submit' onClick={newResident} color='warning'>Add Resident</Button>
    </div> 
    <Container className="px-0 md-5">
        <Row
          className="pt-2 pt-md-5 w-100 px-4 px-xl-0"
        >
              {residents.map(
                (resident) =>
                <Col 
                xs={{ order: 3 }}
                md={{ size: 6, order: 1 }}
                tag="aside"
                className="pb-5 mb-5 pb-md-0 mb-md-4 mx-auto mx-md-0"> 
                <Resident resident={resident} key={resident._id}/> 
                </Col>
              )}
        </Row>
      </Container>
      </main>


    </>
  );
};

export default CarerProfile;
