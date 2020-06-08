const mongoose =  require('mongoose')

const admin = new mongoose.Schema({
    username: String,
    password: String 
})

const Admin = mongoose.model('Material', admin);

module.exports = Admin; 