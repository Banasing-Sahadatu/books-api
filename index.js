const express = require("express");
const dotenv = require("dotenv");
const books = require("./books");
const router = require('./routes/booksRoute');


dotenv.config();
const app = express();

//middleware
get.use(logger);
app.use(express.json())

//route
app.get("/", (req, res) => {
    res.send("<h1>Welcome to our library stockfile</h1>")
})

//get all results

app.get("/books", (req, res) => {
    res.json(books)
})


const PORT = process.env.PORT || 7070

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})