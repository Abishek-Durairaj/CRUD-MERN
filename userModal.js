const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : String,
    email: String,
    age : Number
})

const userModal = mongoose.model('user',userSchema)

module.exports = userModal
























































