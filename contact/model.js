const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  fullName:   String ,

  email: String,

  phone: Number,

  birthdate: Number,
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
