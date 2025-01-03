const mongoose = require('mongoose')

const UserScheam = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})
const UserModel = mongoose.model('users', UserScheam)
module.exports = UserModel