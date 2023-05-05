const express = require('express');
const router = express.Router();

const Resident = require('../../models/Residents');

// Get all residents
router.get('/', (req, res) => {
  Resident.find()
  .then(residents => {
    residents.map((resident => {
      resident.password = undefined // Removes password from array of residents 
    }))
    res.json(residents)
  })
  .catch(err => res.status(404).json({ noresident: 'No Residents found in the database.' }));
});

// Get resident by ID
router.get('/:id', (req, res) => {
  Resident.findOne({ residentID: req.params.id})
    .then(resident => res.json(resident))
    .catch(err => res.status(404).json({ nocarer: 'No Resident found in the database with that ID.' }));
});

// Carer sign up
router.post('/add', (req, res) => {
  Resident.create(req.body)
    .then(resident => res.json({ message: 'Resident successfully created!' }))
    .catch(err => res.status(400).json({ error: 'Error creating the resident.' }));
});

// Delete carer by ID
router.delete('/:id', (req, res) => {
  Resident.findByIdAndRemove(req.params.id, req.body)
    .then(resident => res.json({ message: 'Resident successfully deleted!' }))
    .catch(err => res.status(404).json({ error: 'No such resident' }));
});

module.exports = router;