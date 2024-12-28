const mongoose = require('mongoose');
const User = require('./user.model.js')

const FlashcardSchema = new mongoose.Schema(
    {
    term: {type: String, required: true},
    definition: {type: String, required: true},
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
    
    },
    {
        timestamps: true
    }
);

const Flashcard = mongoose.model("Flashcard", FlashcardSchema);

module.exports  = Flashcard;
