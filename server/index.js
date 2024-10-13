require('dotenv').config(); // Dodaj to na samej górze
const express = require('express');
const app = express();
const connectToMongoDB = require('./mongoConnection');

// Połącz się z MongoDB
connectToMongoDB();


app.get("/players", async (req, res) => {
    try {
        const players = await Player.find();
        res.status(200).json(players);
    } catch (error) {
        console.error("Error fetching players:", error);
        res.status(500).json({ message: "Error fetching players", error });
    }
});

app.use("/", (req, res) => {
    res.send("Server is running");
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});
