import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import AddCarer from './components/signup/Signup';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';

const Placeholder = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
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
          <Route exact path='/profile' element={<Profile />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
