import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AddCarer from "./components/signup/Signup";
import AddResident from "./components/addResidents/AddResident";
import Login from "./components/auth/Login";
import CarerProfile from "./components/carerProfile/CarerProfile";
import ResidentProfile from "./components/residentProfile/ResidentProfile";
import AddNotes from "./components/addNotes/AddNotes";
import LandingPage from "./components/landingPage/LandingPage";
import SideBar from "./components/sideBar/SideBar";
import AllResidents from "./components/resident/AllResidents";

const AppLayout = () => (
  <>
    <SideBar />
    <Outlet />
  </>
);



const App = () => {

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/signup" element={<AddCarer />} />
          <Route exact path="/login" element={<Login />} />
          <Route element={<AppLayout />}>
            <Route exact path="/carers/profile" element={<CarerProfile />} /> 
             {/* //done token for residents profile*/}
            <Route
              path="/residents/profile/:residentID"
              element={<ResidentProfile />}
            />
            <Route exact path="/residents/add" element={<AddResident />} />
             {/* //done token for residents*/}
            <Route exact path="/residents" element={<AllResidents />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};



export default App;
