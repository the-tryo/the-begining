const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5200;
app.use(express.json());

const db = "URI";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/submit", require("./routes/submit"));
app.use("/users", require("./routes/find"));

app.listen(port, () => {
  console.log("Server started at ", port);
});
