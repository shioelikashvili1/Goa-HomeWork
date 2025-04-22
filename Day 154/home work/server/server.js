const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const musicRoutes = require("./routes/music");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", musicRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
