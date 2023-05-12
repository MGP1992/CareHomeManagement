import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Resident from '../resident/resident';
import {
    Container, Row, Col, Button, Form, Input
  } from 'reactstrap';
const AllResidents = () => {

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

            const searchResident = async (e) => {
                const searchValue = e.target.value;
                axios
                  .get(`http://localhost:8082/residents/search?search=${searchValue}`)
                  .then(data => {
                    setResidents(data.data.resident);
                    console.log(residents) 
                  })
                  console.log("is anything in the search value", searchValue)
                // The subset of posts is added to the state that will trigger a re-render of the UI
              };
    const navigate = useNavigate();
    const [residents, setResidents] = useState([])

    const checker = (e) => {
      e.preventDefault()
      console.log('residents', residents)
    }


    return (
      <>
      <main className="my-5 py-5">
      <div  className='d-flex justify-content-center'>
      <Button type='submit' onClick={newResident} color='warning'>Add Resident</Button>
      </div>
      <div>
      <Col className="d-none d-lg-flex justify-content-center">
            <Form inline>
              <Input type="search" className="mr-3" placeholder="Search Residents" onChange={searchResident}/>
              <Button type="submit" color="info" outline onClick={checker}>Search</Button>
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
    )
  }
  export default AllResidents;