const express = require("express");
const app = express();

const cors = require("cors");

const indexRouter = require("./routes/index");
const connDB = require("./config/db");

const PORT = 8080;

connDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1", indexRouter);

app.listen(PORT, () => {
   console.log(`Server running in ${PORT}`);
});