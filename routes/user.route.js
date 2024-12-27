const express = require("express");
const User = require("../models/user.model.js")
const router = express.Router();
const {getUsers, getUser, createUser, deleteUser} = require('../controllers/user.controller.js')

router.get('/', getUsers);

router.get('/:id', getUser);

// post flashcard
router.post('/', createUser);

// delete flashcard
router.delete('/:id', deleteUser);






module.exports = router;

