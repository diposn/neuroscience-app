
const User = require("../models/user.model.js")




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
        const { id } = req.params;
        const user = await User.findById(id);

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error});
    }
};

const createUser = async(req,res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error});
    }
}

const deleteUser = async(req,res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);

        if(!user)
        {
            return res.status(404).json({message: "User not found"});
        }
        res.status(200).json({message: "User deleted!"});

    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error});
    }
}


module.exports = {
    getUsers,
    getUser,
    createUser,
    deleteUser
}