import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../modal/Modal";
import { Button } from "reactstrap";
import {useNavigate} from 'react-router-dom'

const AddNotes = (props) => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const residentID = props.residentID;
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState("activities");
  const token = window.localStorage.getItem("token")
  const [resident, setResident] = useState({
    residentID: "",
    notes: {
      activities: [],
      medication: [],
      wellbeing: [],
      others: [],
    },
  });
  const navigate = useNavigate()
  const tokenCheck = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    if (token) {
      axios.get(`http://localhost:8082/residents/add-notes`, tokenCheck)
    } else {
      navigate("/");
    }
  }, []);


  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "category") {
      setCategory(value);
    } else {
      setResident({
        ...resident,
        notes: {
          ...resident.notes,
          [category]: [...resident.notes[category], { [name]: value }],
        },
      });
    }
  };

  
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      residentID: residentID,
      notes: input, 
      category: category,
      time: new Date().toLocaleString(
        ("en-GB", { hour: "numeric", minute: "numeric" })
      ),
      by: user.firstName + ' ' + user.lastName
    };
    try {
      const res = await axios.post(
        "http://localhost:8082/residents/add-note",
        data
      );
      setResident({
        ...resident,
        notes: {
          activities: [],
          medication: [],
          wellbeing: [],
          other: [],
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="comments-btn-div">
        <Button onClick={() => setShow(true)}>Add Note</Button>
      </div>
      <Modal
        title="New Note"
        className="notes-modal"
        onClose={() => setShow(false)}
        show={show}
      >
        <form noValidate onSubmit={onSubmit}>
          <label htmlFor="dropdown">Choose a category:</label>
          <select
            id="dropdown"
            name="category"
            value={category}
            onChange={onChange}
          >
            <option value="activities">Activities</option>
            <option value="medication">Medication</option>
            <option value="wellbeing">Well-being</option>
            <option value="other">Other</option>
          </select>
          <input
            type="text"
            placeholder="Enter your text.."
            name="notes"
            className="addnotes-input"
            onChange={(e) => setInput(e.target.value)}
          />
          {<input type="submit" className="addresident-submit-btn" />}
        </form>
      </Modal>
    </>
  );
};

export default AddNotes;
