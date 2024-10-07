// const mongoose = require("mongoose");

// const contactSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         require: true
//     },
//     email: {
//         type: String,
//         require: true
//     },
//     Message: {
//         type: String,
//         require: true
//     }
// });

// const contact = new mongoose.model("contact", contactSchema);
// module.exports = contact;

const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
    username: { type: String, require: true },
    email: { type: String, require: true },
    message: { type: String, require: true }
});

//create a model or a collection 
const Contact = new model("Contact", contactSchema);
module.exports = Contact;