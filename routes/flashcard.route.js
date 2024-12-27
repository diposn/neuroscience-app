const express = require("express");
const Flashcard = require("../models/flashcard.model.js")
const router = express.Router();
const {getFlashcards, getFlashcard, createFlashcard, deleteFlashcard} = require('../controllers/flashcard.controller.js')

router.get('/', getFlashcards);

router.get('/:id', getFlashcard);

// post flashcard
router.post('/', createFlashcard);

// delete flashcard
router.delete('/:id', deleteFlashcard);







module.exports = router;