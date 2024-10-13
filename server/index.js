require('dotenv').config(); // Dodaj to na samej górze
const express = require('express');
const app = express();
const connectToMongoDB = require('./mongoConnection');

// Połącz się z MongoDB
connectToMongoDB();

app.use("/", (req, res) => {
    res.send("Server is running");
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});
