const express = require("express");

const Patient = require("../models/patient");

const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("../layouts/index.html");
});

router.post("/", (req, res) => {
  const patient = new Patient({
    name: req.body.name,
    age: req.body.age,
    test: req.body.test,
    date: req.body.date,
  });

  patient.save((err, patients) => {
    if (err) res.json({ msg: "Failed to add patient" });
    else res.json(patients);
  });
});

module.exports = router;
