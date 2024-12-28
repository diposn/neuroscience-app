const express = require('express');
const mongoose = require('mongoose');
const Flashcard = require('./models/flashcard.model.js')
const User = require('./models/user.model.js')
const app = express();
const path = require('path');

const flashcardRoute = require('./routes/flashcard.route.js')
const userRoute = require('./routes/user.route.js')
const clientPath = path.join(__dirname, "./front-end/public");

// middleware
app.use(express.static(clientPath));
app.use(express.json());
app.use(express.urlencoded({extended: false}));



// routes
app.use('/api/flashcards', flashcardRoute);
app.use('/api/users', userRoute);










const port = 3000;
const hostname = "127.0.0.1";

app.get('/', (req,res) => {
    res.sendFile(path.join(clientPath, 'login.html'));
});

app.get('/signup', (req,res) => {
    res.sendFile(path.join(clientPath, 'signup.html'));
});
app.get('/login', (req,res) => {
    res.sendFile(path.join(clientPath, 'login.html'));
});
app.get("/main", (req, res) => {
    res.sendFile(path.join(clientPath, 'main.html'));
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

