import React, {useEffect, useState} from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios';
import Resident from '../resident/resident';
import { 
  Container, Row, Col, Button, Form, Input
} from 'reactstrap';
import Header from '../sass-css/Header';



const CarerProfile = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const navigate = useNavigate();
  const [residents, setResidents] = useState([])

        useEffect(() => {
          axios
          .get(`http://localhost:8082/residents/search`)
          .then((res) => {
              setResidents(res.data);
          });
      }, [])

        const newResident = () =>{
          navigate('/residents/add')
        }

        const searchResident = async (e) => {
          const searchValue = e.target.value;
          axios
            .get(`/api/posts?search=${searchValue}`)
            .then(data => {
              console.log(data.data)
              setResidents(data.data); 
            })
          // The subset of posts is added to the state that will trigger a re-render of the UI
        };

  return (
    <>
    <main className="my-5 py-5">
    <div  className='d-flex justify-content-center'>
    <Button type='submit' onClick={newResident} color='warning'>Add Resident</Button>
    </div> 
    <div className='d-flex justify-content-center'>
    <Col className="d-none d-lg-flex justify-content-center">
            <Form inline>
              <Input type="search" className="mr-3" placeholder="Search React Courses" />
              <Button type="submit" color="info" outline onChange={searchResident}>Search</Button>
            </Form>
    </Col>

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
