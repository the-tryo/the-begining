const express = require("express");

const Patient = require("../models/patient");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("HEY Get api is working");
});

router.post("/", (req, res) => {
  const patient = new Patient({
    name: req.body.name,
    age: req.body.age,
    test: req.body.test,
    date: req.body.date,
  });

  patient.save((err, patient) => {
    if (err) res.json({ msg: "Failed to add contact" });
    else res.json(patient);
  });
});

module.exports = router;
