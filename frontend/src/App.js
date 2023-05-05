import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import AddCarer from './components/signup/Signup';
import AddResident from './components/residents/CreateResident';

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
          <Route exact path='/residents/create' element={<AddResident />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
