const express = require("express");
const Patient = require("../models/patient");

const router = express.Router();
let flag = false;
router.post("/", (req, res) => {
  Patient.find((err, patients) => {
    if (err) res.json(err);
    else {
      patients.map((pate) => {
        if (pate.name == req.body.name) {
          flag = true;
          res.json(pate);
        }
      });
      if (flag == false) res.json({ msg: "Error 404" });
    }
  });
  //if(patient.name === req.body.name) id=patient.id;
});

module.exports = router;
