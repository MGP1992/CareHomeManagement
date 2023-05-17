import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../modal/Modal";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./AddNotes.css";



const AddNotes = ({resident, setNotes}) => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const residentID = resident.residentID;

  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState("activities");
  

  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "category") {
      setCategory(value);
    } else {
      setInput(value)
     
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
      by: user.firstName + " " + user.lastName,
    };
    try {
      await axios.post("http://localhost:8082/residents/add-note", data);
  
      let notePatch = {}

      // build the note patch using the existng notes and a new note
      // TODO: use the current time and user below
      notePatch[category] = [
        ...resident.notes[category],
        { note: input, time: data.time, by: data.by }
      ]

      // merge the existing notes with the note patch to update the correct category
      setNotes(
        {
          ...resident.notes,
          ...notePatch
        }
      )
      setShow(false)
      // we are not clearing the form as it does not match our usecase
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
        title="Add a note"
        className="notes-modal"
        onClose={() => setShow(false)}
        show={show}
      >
        <form noValidate onSubmit={onSubmit}>
          <label htmlFor="dropdown">Select a note category: </label>
          <select
            id="dropdown"
            name="category"
            value={category}
            onChange={onChange}
            class="form-select"
          >
            <option value="activities" class="form-input">
              Activities
            </option>
            <option value="medication">Medication</option>
            <option value="wellbeing">Wellbeing</option>
            <option value="other">Other</option>
          </select>
          <p />
          <textarea
            type="text"
            placeholder="Your note..."
            name="notes"
            className="form-control"
            onChange={(e) => setInput(e.target.value)}
          />
          <p />
          <button type="submit" className="btn btn-primary">
            Submit Note
          </button>
        </form>
      </Modal>
    </>
  );
};

export default AddNotes;
