const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    
    {
        firstName: {type: String},
        lastName: {type: String},
        emailCreate: {type: String, unique: true}
    },
    {
        timestamps: true
    }
    
);

const User = mongoose.model("User", UserSchema);

module.exports  = User;
