const mongoose = require("mongoose");

const PatientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  test: {
    type: String,
  },
  date: {
    type: Date,
  },
});

const Patient = (module.exports = mongoose.model("Patient", PatientSchema));
