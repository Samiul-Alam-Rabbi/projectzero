const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userModel = require('./models/users.js')
const dotenv = require('dotenv')




dotenv.config({path: "config/config.env"})
const port = process.env.PORT
const mongo = process.env.CONNECTION_URL;

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(mongo)

// create user
app.post("/createUser", (req, res) => {
    userModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
// get user
app.get("/", (req, res) => {
    userModel.find({})
    .then(results => res.json(results))
    .catch(err => res.json(err))
})

// get id user
app.get("/getuser/:id", (req, res) => {
    const id = req.params.id
    userModel.findById({_id: id})
    .then(users => res.json(users))
    .catch(err => res.joson(err))
})

// id delete
app.delete("/deleteUser/:id", (req, res) => {
    const id = req.params.id
    userModel.findByIdAndDelete({_id: id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// Update user
app.put("/putUser/:id", (req, res) => {
    const id = req.params.id
    userModel.findByIdAndUpdate({_id: id}, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    })
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(port, (req, res) => {
    console.log(`Server is running at ${port} `)
})