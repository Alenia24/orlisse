import express from "express";

const app = express();

const PORT = 5000;

// Import the database
import "./database/database.js"

app.get("/", (req, res) => {
    res.send("Welcome to the Orlisse API.")
})

// App.listen
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})