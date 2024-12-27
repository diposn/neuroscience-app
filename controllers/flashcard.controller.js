
const Flashcard = require("../models/flashcard.model.js")




const getFlashcards =  async(req,res) => {
    try {
        const flashcard = await Flashcard.find({});
        res.status(200).json(flashcard);
    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error});
    }

};

const getFlashcard =  async(req,res) => {
    try {
        const { id } = req.params;
        const flashcard = await Flashcard.findById(id);

        res.status(200).json(flashcard);
    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error});
    }
};

const createFlashcard = async(req,res) => {
    try {
        const flashcard = await Flashcard.create(req.body);
        res.status(200).json(flashcard);
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