const express = require("express");
const User = require("../models/user.model.js")
const router = express.Router();
const {getUsers, getUser, signupUser, deleteUser, loginUser} = require('../controllers/user.controller.js')

router.get('/', getUsers);

router.get('/:email', getUser);

// post flashcard
router.post('/signup', signupUser);

// delete flashcard
router.delete('/:email', deleteUser);

router.post('/login', loginUser);


module.exports = router;

