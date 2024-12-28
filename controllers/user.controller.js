
const User = require("../models/user.model.js")
const path = require('path');

const clientPath = path.join(__dirname, "./front-end/public");


const getUsers =  async(req,res) => {
    try {
        const user = await User.find({});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error});
    }

};


const getUser =  async(req,res) => {
    try {
        const user = await User.findOne({emailCreate: req.params.email});

        
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error});
    }
};




const signupUser = async(req,res) => {
    const { firstName, lastName, emailCreate } = req.body;
    try {        
        const emailUsed = await User.findOne({ emailCreate });

        if (emailUsed) return res.status(400).send({error: "User Already Exists"});
        if(!emailCreate) return res.status(400).send({error: "You need to enter a valid email address"});

        const user = new User ({
            firstName,
            lastName,
            emailCreate
        });

        await user.save();
        console.log(user);

        res.status(200).json({ message: "Form Submission Successful", user: {firstName: user.firstName, lastName: user.lastName, email: user.emailCreate}});
    } catch (error) {
        console.error("Error in signupUser:", error);

        res.status(500).json({message: "Internal Server Error", error});
    }
}




const deleteUser = async(req,res) => {
    try {
        const { email } = req.params;

        // Find and delete the user by emailCreate
        const user = await User.findOneAndDelete({emailCreate: email});


        if(!user)
        {
            return res.status(404).json({message: "User not found"});
        }
        res.status(200).json({message: "User deleted!"});

    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error});
    }
}

const loginUser = async(req,res) => {

    try {
        const { email } = req.body;

        const user = await User.findOne({emailCreate: email})

        if(!user) return res.status(404).json({message: "User not found"});


        res.redirect(`/main?firstName=${encodeURIComponent(user.firstName)}&lastName=${encodeURIComponent(user.lastName)}&email=${encodeURIComponent(user.emailCreate)}`);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error", error});
    }
}




module.exports = {
    getUsers,
    getUser,
    signupUser,
    deleteUser,
    loginUser
}