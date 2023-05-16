import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Resident from "../resident/resident";
import { Container, Row, Col, Button, Form, Input } from "reactstrap";
import "./AllResidents.css";

const AllResidents = () => {
  const navigate = useNavigate();
  const [residents, setResidents] = useState([]);
  const token = window.localStorage.getItem("token");

  const tokenCheck = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    if (token) {
      axios.get(`http://localhost:8082/residents/`, tokenCheck).then((res) => {
        setResidents(res.data);
      });
    } else {
      navigate("/");
    }
  }, []);

  const newResident = () => {
    navigate("/residents/add");
  };

  const searchResident = async (e) => {
    const searchValue = e.target.value;
    axios
      .get(`http://localhost:8082/residents/search?search=${searchValue}`)
      .then((data) => {
        setResidents(data.data.resident);
        console.log(residents);
      });
    console.log("is anything in the search value", searchValue);
    // The subset of posts is added to the state that will trigger a re-render of the UI
  };

  const checker = (e) => {
    e.preventDefault();
    console.log("residents", residents);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <main className="my-5 py-5">
            <div className="d-flex justify-content-center">
              <Button type="submit" onClick={newResident} color="warning">
                Add Resident
              </Button>
            </div>
            <br />
            <div>
              <Col className="d-none d-lg-flex justify-content-center">
                <Form>
                  <Input
                    type="search"
                    className="form-input form-control-lg"
                    placeholder="Search by first name..."
                    onChange={searchResident}
                  />
                </Form>
              </Col>
            </div>
            <br />
            <div className="residents-box border-1 rounded-5 my-1">
              <Container className="px-0 md-5">
                <Row className="pt-2 pt-md-5 px-4 px-xl-0 justify-content-center">
                  {residents.map((resident) => (
                    <Col
                      xs={{ order: 3 }}
                      md={{ size: 4, order: 1 }}
                      tag="aside"
                      className="pb-5 mb-5 pb-md-0 mb-md-4 mx-auto mx-md-0"
                    >
                      <Resident resident={resident} key={resident._id} />
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
export default AllResidents;
