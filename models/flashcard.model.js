const mongoose = require('mongoose');

const FlashcardSchema = new mongoose.Schema(
    {
    term: {type: String, required: true},
    definition: {type: String, required: true}
    
    },
    {
        timestamps: true
    }
);

const Flashcard = mongoose.model("Flashcard", FlashcardSchema);

module.exports  = Flashcard;
