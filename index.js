const express = require('express');
const mongoose = require('mongoose');
const Flashcard = require('./models/flashcard.model.js')
const User = require('./models/user.model.js')
const app = express();

const flashcardRoute = require('./routes/flashcard.route.js')
const userRoute = require('./routes/user.route.js')


// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));



// routes
app.use('/api/flashcards', flashcardRoute);
app.use('/api/users', userRoute);










const port = 3000;
const hostname = "127.0.0.1";

app.get('/', (req,res) => {
    res.send("Hello world");
});






mongoose.connect('mongodb+srv://neuroscience-app:AzIejKV9IVvqtIpL@backenddb.2oywj.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backenddb')
.then(() => {
    console.log("Connected to database")
    app.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
})
.catch( (error) =>{
    console.log("Connection failed", error)
})

