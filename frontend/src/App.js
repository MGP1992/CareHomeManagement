import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

import AddCarer from './components/signup/Signup';
import AddResident from './components/addResidents/AddResident';
import Login from './components/auth/Login';
import CarerProfile from './components/carerProfile/CarerProfile';
import ResidentProfile from './components/residentProfile/ResidentProfile';
import AddNotes from './components/addNotes/AddNotes';
import Resident from './components/resident/resident';
import Post from './components/sass-css/Post';
import Header from './components/sass-css/Header';
import SideCard from './components/sass-css/SideCard';

const Placeholder = () => {
  return (
    <>
    <Header />

    <main className="my-5 py-5">
      <Container className="px-0">
        <Row
          noGutters
          className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative"
        >
          <Col
            xs={{ order: 2 }}
            md={{ size: 4, order: 1 }}
            tag="aside"
            className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0"
          >
            <SideCard />
          </Col>

          <Col
            xs={{ order: 1 }}
            md={{ size: 7, offset: 1 }}
            tag="section"
            className="py-5 mb-5 py-md-0 mb-md-0"
          >
            <Post />
          </Col>
        </Row>
      </Container>
    </main>
  </>
);
}
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Placeholder />} />
          <Route exact path='/signup' element={<AddCarer />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/carers/profile' element={<CarerProfile />} />
          <Route path='/residents/profile/:residentID' element={<ResidentProfile />} />
          <Route exact path='/residents/add' element={<AddResident />} /> 
          <Route exact path='/residents/add-note' element={<AddNotes />} />
          <Route exact path='/residents/' element={<Resident />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
