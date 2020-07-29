const express = require("express");
const Patient = require("../models/patient");

const router = express.Router();

router.get("/", (req, res) => {
  Patient.find((err, patients) => {
    res.json(patients);
  });
});

module.exports = router;
