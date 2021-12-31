const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
    
     first_name: String,
    last_name: String,
    phone: String, 
    
    dob: String,
    email: String,
    address: String,
    skills: {type: String},
    summary: {type: String},
    work_exprience: {type: String},
    matric: {type: String},
    inter: {type: String},
    graduation: {type: String},
})

module.exports = mongoose.model('resume', ResumeSchema)