const express = require('express');
const app = express();



const port = 3000;
const hostname = "127.0.0.1";
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


app.get('/', (req,res) => {
    res.send("Hello");
});