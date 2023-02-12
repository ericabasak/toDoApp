const { json } = require('express');
const express = require('express')
const app = express()
const { v4:  uuid4 } = require("uuid"); 

// middleware for data on post request
app.use(express.json({extended: false}))

const todos = [
    {
        id: 1,
        message: "Wash car",
    },
    {
        id: 2,
        message: "Cook dinner",
    },
    {
        id: 3,
        message: "Laundry",
    },
]

app.get("/", (req, res) => {
    res.status(200).json(todos);
});

app.post("/", (req, res) => {
    const newTodo = {
        message: req.body.message,
        id: uuidv4(),
    }

    todos.push(newTodo);
    res.status(201).json(json)
})

// const PORT = process.env.PORT || 5001
const PORT = 5001;
app.listen(PORT, () => {
    console.log(`running on port: ${PORT}`)
})