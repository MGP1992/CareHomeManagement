import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddCarer from './components/signup/Signup';
import AddResident from './components/addResidents/AddResident';
import Login from './components/auth/Login';
import CarerProfile from './components/profile/Profile';
import ResidentProfile from './components/resident/Profile';
import AddNotes from './components/addNotes/AddNotes'


const Placeholder = () => {
  return (
    <>
    <p>Care Link</p>
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
        </Routes>
      </div>
    </Router>
  );
};

export default App;
