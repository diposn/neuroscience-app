
const Flashcard = require("../models/flashcard.model.js");
const User =  require("../models/user.model.js");



const getFlashcards =  async(req,res) => {
    try {
        const flashcard = await Flashcard.find({});
        res.status(200).json(flashcard);
    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error});
    }

};

const getFlashcard =  async(req,res) => {

    const {email} = req.query;

    try {

        const user = await User.findOne({emailCreate: email});
        const flashcards = await Flashcard.findOne({author: user._id});

        res.status(200).json(flashcards);
    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error});
    }
};







const createFlashcard = async(req,res) => {

    const {term, definition, email} = req.body;
    const user = await User.findOne({ emailCreate: email});
     try {

        const newFlashcard = new Flashcard({
            term,
            definition,
            author: user._id
        });
        await newFlashcard.save();
        res.status(201).json(newFlashcard);
    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error});
    }
}













const deleteFlashcard = async(req,res) => {
    try {
        const { id } = req.params;
        const flashcard = await Flashcard.findByIdAndDelete(id);

        if(!flashcard)
        {
            return res.status(404).json({message: "Flashcard not found"});
        }
        res.status(200).json({message: "Flashcard deleted!"});

    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error});
    }
}


module.exports = {
    getFlashcards,
    getFlashcard,
    createFlashcard,
    deleteFlashcard
}