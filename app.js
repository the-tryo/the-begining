const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5200;
app.use(express.json());

const db =
  "mongodb+srv://avatar:Avatar@123@project-cluster.ipmhy.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";

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

app.use("/submit_ack", require("./routes/submit"));
app.use("/find_ack", require("./routes/find"));

app.listen(port, () => {
  console.log("Server started at ", port);
});
