require('dotenv').config();

"use strict";

const cors = require("cors");

const { fetchPopularPatterns } = require('./utils/ravelryAPI.js');

const express = require("express");
const app = express();

const port = process.env.PORT;

app.use(cors());

app.use(express.static("./public"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/api/patterns/search.json", async (request, response) => {
    try {
        const patterns = await fetchPopularPatterns();
        response.status(200).json({
            status: 200,
            data: patterns,
        }); 
    } catch (error) {
        console.log("Error catching API route:", error)
        response.status(500).json({
            status: 500,
            error:"Failed to fetch popular patterns"
        });
    }
});


app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
});
