const express = require('express');
const router = express.Router();

const Carer = require('../../models/Carers');

// Get all carers
router.get('/', (req, res) => {
  Carer.find()
    .then(carers => res.json(carers))
    .catch(err => res.status(404).json({ nocarers: 'No Carers found in the database.' }));
});

// Get carer by ID
router.get('/:id', (req, res) => {
  Carer.findById(req.params.id)
    .then(carer => res.json(carer))
    .catch(err => res.status(404).json({ nocarer: 'No Carer found in the database with that ID.' }));
});

// Carer sign up
router.post('/', (req, res) => {
  Carer.create(req.body)
    .then(carer => res.json({ message: 'Carer successfully created!' }))
    .catch(err => res.status(400).json({ error: 'Error creating the carer.' }));
});

// Delete carer by ID
router.delete('/:id', (req, res) => {
  Carer.findByIdAndRemove(req.params.id, req.body)
    .then(carer => res.json({ message: 'Carer successfully deleted!' }))
    .catch(err => res.status(404).json({ error: 'No such a book' }));
});

module.exports = router;